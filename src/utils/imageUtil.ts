export function getImageURL(name: string) {
  //return new URL(`../../public/images/${name}.webp`, import.meta.url).href;
  return new URL(`../../public/images/${name}`, import.meta.url).href;
}
