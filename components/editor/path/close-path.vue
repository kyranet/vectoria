<template>
	<editor-path-base title="Close Path">
		<div class="input input-bordered grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span>X</span>
				<input v-model="el.end.x" class="min-w-0" type="number" min="0" disabled="true" />
			</label>
			<label class="flex gap-2">
				<span>Y</span>
				<input v-model="el.end.y" class="min-w-0" type="number" min="0" disabled="true" />
			</label>
		</div>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { ClosePath } from '~/utils/svg/path/ClosePath';

defineProps<{ el: ClosePath }>();
</script>
