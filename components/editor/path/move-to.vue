<template>
	<editor-path-base title="Move To">
		<editor-path-move-to-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { MoveTo } from '~/utils/svg/path/MoveTo';

defineProps<{ el: MoveTo }>();
defineEmits<{
	(event: 'update', value: MoveTo): void;
}>();
</script>
