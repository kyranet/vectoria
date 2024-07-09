<template>
	<label class="form-control">
		<editor-attributes-common-header name="Class" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class" animatable="yes" />
		<input v-model="value" type="text" placeholder="unset" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGElement }>();
const value = useAttribute(props.el, 'class', '');
</script>
