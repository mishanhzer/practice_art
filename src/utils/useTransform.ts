import { TypesUseTransform } from "./types"

export const _transform = (item: TypesUseTransform) => {  
  return {
    file: item.file,
    preview: item.preview,
    name: item.name,
    path: item.path,
    sizes: item.sizes,
  }
}
