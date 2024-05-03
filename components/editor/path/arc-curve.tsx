import type { ArcCurve } from '~/utils/svg/path/ArcCurve';

export default function render({ el }: { el: ArcCurve }) {
	return (
		<editor-element-base title="Arc Curve">
			{el.entries.map((entry) => (
				<>
					<span>
						<icon-ellipse-x-radius class="h-5 w-5" />
						{entry.rx}
						<icon-ellipse-y-radius class="h-5 w-5" />
						{entry.ry}
					</span>
					<span>
						<icon-angle class="h-5 w-5" />
						{entry.angle}º
					</span>
					<span>
						{entry.largeArcFlag ? (
							<>
								<icon-arc-large class="h-5 w-5" />
								Large Arc
							</>
						) : (
							<>
								<icon-arc-short class="h-5 w-5" />
								Short Arc
							</>
						)}
					</span>
					<span>
						{entry.sweepFlag ? (
							<>
								<icon-circle-anticlockwise class="h-5 w-5" />
								Anticlockwise
							</>
						) : (
							<>
								<icon-circle-clockwise class="h-5 w-5" />
								Clockwise
							</>
						)}
					</span>
					<span>
						<icon-axis-x class="h-5 w-5" />
						{entry.x}
						<icon-axis-y class="h-5 w-5" />
						{entry.y}
					</span>
				</>
			))}
		</editor-element-base>
	);
}
