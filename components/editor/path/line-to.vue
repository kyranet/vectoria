<template>
	<editor-path-base title="Line To">
		<editor-path-line-to-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { LineTo } from '~/utils/svg/path/LineTo';

defineProps<{ el: LineTo }>();
defineEmits<{
	(event: 'update', value: LineTo): void;
}>();
</script>
