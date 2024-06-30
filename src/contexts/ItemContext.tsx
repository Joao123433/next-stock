import { ItemsDataInterface } from "@/interfaces | types/ItemsData";
import { ItemsFetch } from "@/interfaces | types/ItemsFetch";
import { ItemsInput } from "@/interfaces | types/ItemsInput";
import { ItemsInterface } from "@/interfaces | types/ItemsInterfaces";
import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ItemContext = createContext<ItemsDataInterface>({} as ItemsDataInterface)

export function ItemProvider({ children }: ItemsInterface) {
  const [items, setItems] = useState<ItemsFetch[]>([])

  useEffect(() => {
    api.get("item").then((res) => setItems(res.data))
  }, [])

  async function createItem(ItemData: ItemsInput) {
    const response = await api.post("item", {...ItemData})

    const item = response.data

    setItems((prevState) => [item, ...prevState])

    toast("Item Adicionado", { theme: "dark" })
  }

  async function updateItem(ItemData: ItemsFetch) {
    const response = await api.put(`item/${ItemData._id}`, {...ItemData, updatedAt: new Date()})

    console.log(response)

    const updateItem: ItemsFetch = response.data

    const itemsFilter = items.filter(item => item._id != updateItem._id)

    setItems([updateItem, ...itemsFilter])
    
    toast("Item Atualizado", { theme: "dark" })
  }

  async function deleteItem(id: string) {
    const response = await api.delete(`item/${id}`)

    const itemsFilter = items.filter((item) => item._id != response.data._id) 
    
    setItems([...itemsFilter])

    toast("Item Deletado", { theme: "dark" })
  }

  return (
    <ItemContext.Provider value={ { items, createItem, updateItem, deleteItem } }>
      {children}
    </ItemContext.Provider>
  )
}