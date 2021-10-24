export function convertHoursToMilliseconds(hours: number) {
  return Math.floor(hours * 60 * 60 * 1000);
}
