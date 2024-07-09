<template>
	<nuxt-link v-once :href="url"><icon-documentation class="text-info" /></nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
</script>
