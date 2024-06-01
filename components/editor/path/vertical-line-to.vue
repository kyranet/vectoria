<template>
	<editor-path-base title="Vertical Line To">
		<editor-path-vertical-line-to-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { VerticalLineTo } from '~/utils/svg/path/VerticalLineTo';

defineProps<{ el: VerticalLineTo }>();
defineEmits<{
	(event: 'update', value: VerticalLineTo): void;
}>();
</script>
