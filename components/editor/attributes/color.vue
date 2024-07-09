<template>
	<label class="form-control">
		<editor-attributes-common-header name="Color" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color" animatable="yes" />
		<editor-attributes-input-color v-model="value" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGElement }>();
const value = useAttribute(props.el, 'color', 'inherit');
</script>

<!-- import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';
import { VectorTagNames } from '../../../utils/svg/attributes/shared/constants';

export const Color = makeAttribute({
	name: 'color',
	propertyName: 'color',
	title: 'Color',
	types: [attributeValueEnum('inherit'), attributeValueString()],
	default: 'inherit',
	animatable: true,
	appliesTo: VectorTagNames,
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color'
}); -->
