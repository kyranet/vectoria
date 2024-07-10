<template>
	<nuxt-link target="_blank" v-once :href="url"><icon-documentation class="text-info" /></nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ url: string }>();
</script>
