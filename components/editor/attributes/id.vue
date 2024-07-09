<template>
	<label class="form-control">
		<editor-attributes-common-header name="Identifier" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/id" animatable="no" />
		<input v-model="value" type="text" placeholder="unset" class="input" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGElement }>();
const value = useAttribute(props.el, 'id');
</script>
