export const extractWords = (phrase: string, extract: Function) =>
  extract(phrase.split(" ").slice(0, 3).join(" "));
