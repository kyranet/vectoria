<template>
	<nuxt-link v-once :href="url"><Icon name="material-symbols:developer-guide-outline-rounded" class="-translate-y-0.5 text-info" /></nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
</script>
