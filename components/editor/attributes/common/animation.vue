<template>
	<span class="inline-block -translate-y-0.5">
		<Icon v-if="animatable === 'yes'" name="ic:round-motion-photos-on" class="text-base-content" />
		<Icon v-else-if="animatable === 'no'" name="ic:round-motion-photos-off" class="text-base-content/50" />
		<Icon v-else-if="animatable === 'discrete'" name="ph:steps" class="text-base-content" />
	</span>
</template>

<script setup lang="ts">
defineProps<{ animatable: 'yes' | 'no' | 'discrete' }>();
</script>
