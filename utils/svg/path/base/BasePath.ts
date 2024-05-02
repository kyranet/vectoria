import type { VectorPath } from '../../VectorPath';
import type { Coordinate } from '../../shared/Coordinate';

export abstract class BasePath<Type extends string> {
	public readonly type: Type;
	public readonly parent: VectorPath;
	public readonly index: number;
	public readonly start: Coordinate;
	public readonly abstract end: Coordinate;

	protected constructor(type: Type, parent: VectorPath, start: Coordinate) {
		this.type = type;
		this.parent = parent;
		this.index = parent.entries.length;
		this.start = start;
	}

	/**
	 * Returns the previous path entry.
	 */
	public get previous(): VectorPath.PathEntry | null {
		if (this.index === 0) return null;
		return this.parent.entries[this.index - 1];
	}

	/**
	 * Returns the next path entry.
	 */
	public get next(): VectorPath.PathEntry | null {
		if (this.index === this.parent.entries.length - 1) return null;
		return this.parent.entries[this.index + 1];
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
