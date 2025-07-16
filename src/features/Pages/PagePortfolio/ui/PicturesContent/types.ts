export interface TypesDisplayedData {
  category?: string;
  name: string;
  path: string;
  file: string;
  preview: string
  class?: string;
  id?: number;
  sizes: { url: string, name: string }[]
}

export interface TypesPicturesContent {
  stylesContainer: string;
  displayedData: TypesDisplayedData[];
  stylesWrapperImg: string;
}