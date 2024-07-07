import type { VectorPath } from '../../VectorPath';
import type { Coordinate } from '../../shared/Coordinate';

export abstract class BasePath<Type extends string> {
	public readonly icon: Component;
	public readonly type: Type;
	public readonly siblings: VectorPath.PathEntry[];
	public index: number;
	public readonly start: Coordinate;
	public abstract readonly end: Coordinate;

	protected constructor(icon: Component, type: Type, siblings: VectorPath.PathEntry[], start: Coordinate) {
		this.type = type;
		this.icon = markRaw(icon);
		this.siblings = siblings;
		this.index = siblings.length;
		this.start = start;
	}

	/**
	 * Returns the previous path entry.
	 */
	public get previous(): VectorPath.PathEntry | null {
		if (this.index === 0) return null;
		return this.siblings[this.index - 1];
	}

	/**
	 * Returns the next path entry.
	 */
	public get next(): VectorPath.PathEntry | null {
		if (this.index === this.siblings.length - 1) return null;
		return this.siblings[this.index + 1];
	}

	/**
	 * Returns whether the path is relative.
	 */
	public abstract isRelative(): boolean;

	/**
	 * Returns the string representation of the path.
	 */
	public abstract toString(): string;

	protected formatString(entries: { toString: () => string }[]) {
		if (entries.length === 0) return this.type;
		if (entries.length === 1) return `${this.type} ${entries[0].toString()}`;
		return `${this.type} ${entries.map((entry) => entry.toString()).join(' ')}`;
	}
}
