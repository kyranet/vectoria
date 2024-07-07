<template>
	<div class="flex w-full flex-col items-center gap-8 self-center">
		<div
			class="grid w-full max-w-xl rounded-lg border-4 border-base-100 bg-base-200 p-4 outline outline-4 outline-base-200 drop-shadow-lg"
			:class="{
				'border-error': error && tab !== 0,
				'border-success': svg && tab !== 0
			}"
		>
			<div role="tablist" class="tabs-boxed tabs mb-8">
				<label role="tab" class="tab">
					<span class="flex items-center gap-1">
						<Icon name="material-symbols:check-box-outline-blank" class="h-5 w-5" />
						Empty
					</span>
					<input v-model="tab" type="radio" :value="0" name="import-type" class="hidden" />
				</label>
				<label role="tab" class="tab">
					<span class="flex items-center gap-1">
						<Icon name="material-symbols:upload-rounded" class="h-5 w-5" />
						Import
					</span>
					<input v-model="tab" type="radio" :value="1" name="import-type" class="hidden" />
				</label>
				<label role="tab" class="tab">
					<span class="flex items-center gap-1">
						<Icon name="material-symbols:content-paste" class="h-5 w-5" />
						Paste
					</span>
					<input v-model="tab" type="radio" :value="2" name="import-type" class="hidden" />
				</label>
			</div>

			<template v-if="tab === 0">
				<h2 class="text-xl font-bold">Create a new SVG</h2>

				<div class="grid grid-cols-2 gap-2">
					<label class="form-control mt-2">
						<div class="label">
							<span class="label-text">Width</span>
						</div>
						<input v-model="width" type="number" class="input input-bordered" min="1" />
					</label>
					<label class="form-control mt-2">
						<div class="label">
							<span class="label-text">Height</span>
						</div>
						<input v-model="height" type="number" class="input input-bordered" min="1" />
					</label>
				</div>

				<button class="btn btn-primary mt-4" @click="submitEmpty">Create</button>
			</template>

			<template v-else-if="tab === 1">
				<h2 class="mb-4 text-xl font-bold">Import an existing SVG</h2>
				<input type="file" class="file-input file-input-bordered mt-2" />
				<button class="btn btn-success mt-4" :disabled="!svg" @click="submit">Create</button>
			</template>

			<template v-else>
				<h2 class="mb-4 text-xl font-bold">Paste or write a SVG</h2>
				<textarea
					ref="textarea"
					v-model.trim="input"
					class="textarea textarea-bordered max-h-96 resize-none font-mono"
					autofocus="true"
					spellcheck="false"
					placeholder="SVG code"
				></textarea>
				<button class="btn btn-success mt-4" :disabled="!svg" @click="submit">Create</button>
			</template>

			<template v-if="tab !== 0 && error">
				<h2 class="mt-8 text-xl font-bold">Import Error</h2>
				<div class="mt-4 rounded-xl border border-base-100 bg-base-300 p-2 font-mono">{{ error }}</div>
			</template>
		</div>
	</div>

	<div v-show="dropping" class="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-base-300/60 backdrop-blur-sm">
		<div class="rounded-box bg-primary p-4 text-primary-content">
			<div class="rounded-box p-12 outline outline-8 outline-white/20">
				<span class="text-4xl font-bold">Drop to load</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(event: 'submit', value: SVGSVGElement): void;
}>();

const width = ref(300);
const height = ref(150);
const input = ref('');
const throttledInput = refThrottled(input, 1000);

const tab = ref<0 | 1 | 2>(0);

const svg = ref<SVGSVGElement | null>(null);
const error = ref<string | null>(null);

const { textarea } = useTextareaAutosize({ input });

const dropping = ref(false);
if (import.meta.client) {
	const parser = new DOMParser();
	watch(throttledInput, (value) => {
		const result = parser.parseFromString(value, 'image/svg+xml');
		const [child] = result.children;

		if (child.tagName === 'svg') {
			if (child.namespaceURI !== 'http://www.w3.org/2000/svg') {
				svg.value = null;
				error.value = 'The SVG must have defined a xmlns attribute with the value of http://www.w3.org/2000/svg';
			} else {
				svg.value = child as SVGSVGElement;
				error.value = null;
			}
		} else {
			svg.value = null;

			const parserError = child.getElementsByTagName('parsererror').item(0);
			if (parserError) {
				let err = '';
				for (const div of parserError.getElementsByTagName('div')) {
					if (!err) err = div.innerText;
					else err += `\n${div.innerText}`;
				}

				error.value = err;
			} else {
				error.value = 'The root element must be a SVG element';
			}
		}
	});

	const { isOverDropZone } = useDropZone(document.body, { onDrop, dataTypes: ['image/svg+xml'] });
	syncRef(dropping, isOverDropZone);

	async function onDrop(files: File[] | null) {
		if (!files?.length) return;

		const [file] = files;
		if (file.type !== 'image/svg+xml') return;

		input.value = (await file.text()).trim();
		tab.value = 2;
	}
}

function submitEmpty() {
	const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	element.setAttribute('viewBox', `0 0 ${width.value} ${height.value}`);
	emit('submit', element);
}

function submit() {
	emit('submit', svg.value!);
}
</script>

<style scoped lang="css">
.tab:has(> input:checked) {
	@apply tab-active;
}

textarea {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

textarea::-webkit-scrollbar {
	display: none;
}
</style>
