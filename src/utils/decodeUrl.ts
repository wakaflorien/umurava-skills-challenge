export const decodeUrl = (url: string) => {
  const decoded = decodeURIComponent(url);

  return decoded
    .replace(/%20/g, " ")
    .replace(/%2C/g, ",")
    .replace(/%26/g, "&")
    .replace(/%3A/g, ":")
    .replace(/%2F/g, "/")
    .replace(/\+/g, " ");
};