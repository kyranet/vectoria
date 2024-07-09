<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Baseline Shift"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift"
			animatable="yes"
		/>
		<select v-model="value" class="select select-bordered">
			<option value="sub">Sub</option>
			<option value="super">Super</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGTextPathElement | SVGTSpanElement }>();
const value = useAttribute(props.el, 'baseline-shift', '0');
// TODO
</script>

<!-- import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';

export const BaselineShift = makeAttribute({
	name: 'baseline-shift',
	propertyName: 'baselineShift',
	title: 'Baseline Shift',
	types: [attributeValueEnum('sub', 'super'), attributeValueLengthPercentage()],
	default: { value: 0, unit: null },
	animatable: true,
	appliesTo: ['textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift'
}); -->
