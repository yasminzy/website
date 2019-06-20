function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/\./g, "");
}

export { urlize };
