export function convertHoursToMilliseconds(hours: number) {
  return Math.floor(hours * 60 * 60 * 1000);
}

export function convertMegaBytesToBytes(megabytes: number) {
  return megabytes * 1024 ** 2;
}

export const convertBytesToMegaBytes = (bytes: number) => bytes / (1024 * 1024);
