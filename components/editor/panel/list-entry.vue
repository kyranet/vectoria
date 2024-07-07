<template>
	<div class="border-l border-base-content/10 pl-2">
		<div class="flex cursor-pointer items-center rounded-md hover:bg-base-100" @click="selected = el">
			<icon-caret v-if="children.length" :open="open" class="h-6 w-6" @click.stop="toggleOpen()" />
			<component v-if="el.icon" :is="el.icon" class="mr-1" />
			<div class="grow font-bold">
				<span>{{ el.title }}</span>
				<span v-if="el.id" class="ml-2 font-mono text-xs text-base-content/50">{{ el.id }}</span>
			</div>
		</div>

		<div v-if="children.length" v-show="open">
			<!-- @vue-expect-error Vue unwraps the value in a non-functional way -->
			<editor-panel-list-entry v-for="child in el.children" :el="child" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { VectorAny } from '~/utils/svg/shared/makeVectorElement';

const props = defineProps<{ el: VectorAny }>();
const children = 'children' in props.el ? props.el.children : [];
const selected = inject(InjectedSelectedElement);
const [open, toggleOpen] = useToggle(true);
</script>
