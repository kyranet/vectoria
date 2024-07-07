<template>
	<div class="rounded-lg bg-base-200 p-1">
		<div class="join w-full justify-end">
			<button class="btn join-item btn-xs text-primary disabled:btn-ghost disabled:text-base-content/60" :disabled="upDisabled" @click="moveUp">
				<Icon name="material-symbols:keyboard-arrow-up-rounded" />
			</button>
			<button
				class="btn join-item btn-xs text-primary disabled:btn-ghost disabled:text-base-content/60"
				:disabled="downDisabled"
				@click="moveDown"
			>
				<Icon name="material-symbols:keyboard-arrow-down-rounded" />
			</button>
			<button class="btn join-item btn-xs" @click="remove">
				<Icon name="material-symbols:delete-forever-rounded" class="text-error" />
			</button>
		</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts" generic="PathType extends BasePath<string>, PathPartType extends BasePathPart<BasePath<string>>">
import type { BasePath } from '~/utils/svg/path/base/BasePath';
import type { BasePathPart } from '~/utils/svg/path/base/BasePathPart';

const props = defineProps<{ el: PathPartType; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: PathPartType): void;
}>();

const entries = computed(() => (props.el.parent as PathType & { entries: PathPartType[] }).entries);

const upDisabled = computed(() => props.index === 0);
const downDisabled = computed(() => props.index === entries.value.length - 1);

function moveUp() {
	if (upDisabled.value) return;

	const index = props.index;
	const previousEntry = entries.value[index - 1];
	const entry = entries.value[index];

	entries.value[index - 1] = entry;
	entries.value[index] = previousEntry;

	emit('update', props.el);
}

function moveDown() {
	if (downDisabled.value) return;

	const index = props.index;
	const nextEntry = entries.value[index + 1];
	const entry = entries.value[index];

	entries.value[index + 1] = entry;
	entries.value[index] = nextEntry;

	emit('update', props.el);
}

function remove() {
	if (entries.value.length === 1) {
		const parent = props.el.parent;
		const index = parent.index;
		parent.siblings.splice(index, 1);
		for (let i = index; i < parent.siblings.length; i++) {
			parent.siblings[i].index--;
		}
	} else {
		entries.value.splice(props.index, 1);
	}

	emit('update', props.el);
}
</script>
