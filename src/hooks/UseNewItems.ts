import { SetStateAction, useState } from "react";
import { UseItem } from "./UseItem";

export default function UseNewItems() {
  const [ name, setName ] = useState("")
  const [ quantity, setQuantity ] = useState(0)
  const [ price, setPrice ] = useState(0)
  const [ category, setCategory ] = useState("")
  const [ description, setDescription ] = useState("")
  const { createItem } = UseItem()

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
      name: name,
      amount: quantity,
      price: price,
      category: category,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    setName("")
    setQuantity(0)
    setPrice(0)
    setCategory("")
    setDescription("")

    createItem(item)
  }

  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}