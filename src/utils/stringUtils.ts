export function pascalCaseToTitleCase(s: string) {
  return s.replace(/([A-Z])/g, " $1").trim();
}
