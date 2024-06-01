export type Length = { value: 0; unit: null } | { value: number; unit: LengthUnit };

export type LengthUnit = LengthUnitRelative | LengthUnitAbsolute;

export type LengthUnitRelative = LengthUnitRelativeFont | LengthUnitRelativeRootFont | LengthUnitRelativeViewport | LengthUnitRelativeQueryLength;
export type LengthUnitRelativeFont = 'cap' | 'ch' | 'em' | 'ex' | 'ic' | 'lh';
export type LengthUnitRelativeRootFont = `r${LengthUnitRelativeFont}`;
export type LengthUnitRelativeViewport = 'vh' | 'vw' | 'vmax' | 'vmin' | 'vb' | 'vi';
export type LengthUnitRelativeQueryLength = 'cqw' | 'cqh' | 'cqi' | 'cqb' | 'cqmin' | 'cqmax';
export type LengthUnitAbsolute = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';
