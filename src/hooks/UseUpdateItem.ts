import { useState, SetStateAction, ChangeEvent } from "react"
import { UseItem } from "./UseItem"
import { ItemsFetch } from "@/interfaces | types/ItemsFetch"

export default function UseUpdateItems(itemId: string) {
  const { items } = UseItem()
  const findItem = items.find(item => item._id === itemId) as ItemsFetch

  const [ name, setName ] = useState(findItem.name)
  const [ quantity, setQuantity ] = useState<string>(String(findItem.amount))
  const [ price, setPrice ] = useState<string>(String(findItem.price))
  const [ category, setCategory ] = useState(findItem.category)
  const [ description, setDescription ] = useState(findItem.description)
  const { updateItem } = UseItem()

  const settingName = (ev: { target: { value: SetStateAction<string> } }) => {
    setName(ev.target.value)
  }

  const settingQuantity = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuantity(ev.target.value)
  }

  const settingPrice = (ev: ChangeEvent<HTMLInputElement>) => {
    setPrice(ev.target.value)
  }

  const settingCategory = (ev: { target: { value: SetStateAction<string> } }) => {
    setCategory(ev.target.value)
  }

  const settingDescription = (ev: { target: { value: SetStateAction<string> } }) => {
    setDescription(ev.target.value)
  }

  const handleClick = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()

    const item = {
      _id: findItem._id,
      name: name,
      amount: Number(quantity),
      price: Number(price),
      category: category,
      description: description,
      createdAt: findItem.createdAt,
      updatedAt: new Date()
    }

    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")

    updateItem(item)
  }

  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}