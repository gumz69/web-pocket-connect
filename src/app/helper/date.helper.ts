export function formatDate(data: Date) {
  const date = new Date(data);
  return `${(date.getDate() < 10 ? '0' : '') + date.getDate()}-${
    (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
  }-${date.getFullYear()} ${
    (date.getHours() < 10 ? '0' : '') + date.getHours()
  }:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${
    (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
  }`;
}
