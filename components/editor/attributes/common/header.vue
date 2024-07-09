<template>
	<div v-once class="label">
		<span class="label-text flex items-center gap-0.5">
			{{ name }}
			<editor-attributes-common-info :url />
			<editor-attributes-common-animation :animatable />
		</span>
	</div>
</template>

<script setup lang="tsx">
defineProps<{
	name: string;
	url: string;
	animatable: 'yes' | 'no' | 'discrete';
}>();
</script>
