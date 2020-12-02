export function toPascalCase(str) {
  const words = str.match(/[a-z]+/gi);
  if (!words) return "";

  return words
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join("");
}
