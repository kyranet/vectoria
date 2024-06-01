<template>
	<editor-path-base title="Horizontal Line To">
		<editor-path-horizontal-line-to-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { HorizontalLineTo } from '~/utils/svg/path/HorizontalLineTo';

defineProps<{ el: HorizontalLineTo }>();
defineEmits<{
	(event: 'update', value: HorizontalLineTo): void;
}>();
</script>
