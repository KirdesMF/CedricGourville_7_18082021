export function convertHoursToMilliseconds(hours: number) {
  return Math.floor(hours * 60 * 60 * 1000);
}

export function convertMegaBytesToBytes(megabytes: number) {
  return megabytes * 1024 ** 2;
}

export const convertBytesToMegaBytes = (bytes: number) => bytes / (1024 * 1024);

export function convertDate(date: Date) {
  const newDate = new Date(date);

  const day =
    newDate.getDate() > 9 ? newDate.getDate() : `0${newDate.getDate()}`;

  const month =
    newDate.getMonth() + 1 > 9
      ? newDate.getMonth() + 1
      : `0${newDate.getMonth() + 1}`;

  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export function convertDateToTime(date: Date) {
  const newDate = new Date(date);

  const hours =
    newDate.getHours() > 9 ? newDate.getHours() : `0${newDate.getHours()}`;

  const minutes =
    newDate.getMinutes() > 9
      ? newDate.getMinutes()
      : `0${newDate.getMinutes()}`;

  return `${hours}:${minutes}`;
}
