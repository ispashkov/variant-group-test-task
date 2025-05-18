export const parseEnvAsString = (
  value: string | undefined,
  fallback = '',
): string => {
  return value ?? fallback;
};

export const parseEnvAsNumber = (
  value: string | undefined,
  fallback: number,
): number => {
  return value ? Number.parseInt(value, 10) : fallback;
};
