import { useState, SetStateAction } from "react"
import { UseItem } from "./UseItem"
import { ItemsFetch } from "@/interfaces | types/ItemsFetch"

export default function UseUpdateItems(itemId: string) {
  const { items } = UseItem()
  const findItem = items.find(item => item._id === itemId) as ItemsFetch

  const [ name, setName ] = useState(findItem.name)
  const [ quantity, setQuantity ] = useState(findItem.amount)
  const [ price, setPrice ] = useState(findItem.price)
  const [ category, setCategory ] = useState(findItem.category)
  const [ description, setDescription ] = useState(findItem.description)
  const { updateItem } = UseItem()

  const settingName = (ev: { target: { value: SetStateAction<string> } }) => {
    setName(ev.target.value)
  }

  const settingQuantity = (ev: { target: { value: SetStateAction<number>; }; }) => {
    setQuantity(ev.target.value)
  }

  const settingPrice = (ev: { target: { value: SetStateAction<number>; }; }) => {
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
      amount: quantity,
      price: price,
      category: category,
      description: description,
      createdAt: findItem.createdAt,
      updatedAt: new Date()
    }

    setName("")
    setQuantity(0)
    setPrice(0)
    setCategory("")
    setDescription("")

    updateItem(item)
  }

  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}