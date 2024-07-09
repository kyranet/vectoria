<template>
	<icon-animation-on v-if="animatable === 'yes'" class="text-base-content" />
	<icon-animation-off v-else-if="animatable === 'no'" class="text-base-content/50" />
	<icon-steps v-else-if="animatable === 'discrete'" class="text-base-content" />
</template>

<script setup lang="ts">
defineProps<{ animatable: 'yes' | 'no' | 'discrete' }>();
</script>
