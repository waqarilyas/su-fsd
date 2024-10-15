const compareFilenames = (
  a: string,
  b: string,
  order: "asc" | "desc"
): number => {
  const result = a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });

  return order === "asc" ? result : -result;
};

export { compareFilenames };
