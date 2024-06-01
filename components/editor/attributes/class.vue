<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Class
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<input v-model="value" type="text" placeholder="unset" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGElement }>();
const value = useAttribute(props.el, 'class', '');
</script>
