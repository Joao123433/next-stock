import { ItemsFetch } from "./ItemsFetch"
import { ItemsInput } from "./ItemsInput"

export interface ItemsDataInterface {
  items: ItemsFetch[]
  createItem: (item: ItemsInput) => Promise<void>
  updateItem: (item: ItemsFetch) => Promise<void>
  deleteItem: (id: string) => Promise<void>
}