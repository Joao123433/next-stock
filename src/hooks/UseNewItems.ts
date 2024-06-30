import { ChangeEvent, SetStateAction, useState } from "react";
import { UseItem } from "./UseItem";

export default function UseNewItems() {
  const [ name, setName ] = useState("")
  const [ quantity, setQuantity ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ category, setCategory ] = useState("")
  const [ description, setDescription ] = useState("")
  const { createItem } = UseItem()

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
      name: name,
      amount: Number(quantity),
      price: Number(price),
      category: category,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")

    createItem(item)
  }

  return { name, settingName, quantity, settingQuantity, price, settingPrice, category, settingCategory, description, settingDescription, handleClick }
}