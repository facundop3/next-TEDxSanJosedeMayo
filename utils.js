export const two = arr => {
  const [first, second, ...rest] = arr;
  if (!first) return [];
  if (!second) return [[first]];
  return [[first, second], ...two(rest)];
};
