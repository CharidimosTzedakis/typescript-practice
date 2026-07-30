// when a function A <: function B
// 1. A --> same or lower arity
// 2. this either not specified, or >: of this of B
// 3. params are >: of param B
// 4. the return type is <: of function B

function calculateSize2D(dimension: { x: number; y: number }) {
  return 2 * dimension.x + 2 * dimension.y;
}

function calculateSize2Dor1D(dimension: { x: number; y?: number }) {
  return dimension.y ? 2 * dimension.x + 2 * dimension.y : 2 * dimension.x;
}

function calculation(fn: typeof calculateSize2D) {
  const dimension = { x: 1, y: 2 };
  return fn(dimension);
}

calculation(calculateSize2Dor1D);
// typeof calculateSize2Dor1D is a subtype of typeof calculateSize2D
// calculateSize2or1D is assignable to typeof calculateSize2D
