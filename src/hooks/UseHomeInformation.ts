import { UseItem } from "./UseItem"

export default function UseHomeInformation() {
  const { items } = UseItem()

  const totalItems = items.length

  const itemsAcabando = items.filter(item => item.amount < 10)
  
  const getItemsRecentes = () => {
    const hoje = new Date()
    const dezDiasAtras = new Date()
    dezDiasAtras.setDate(hoje.getDate() - 10)
  
    return items.filter(item => new Date(item.updatedAt) > dezDiasAtras)
  } 

  const itemsRecentes = getItemsRecentes()

  function quantityDifferenItems(): number {
    const uniqueItems = new Set<string>();
  
    items.forEach(item => {
      uniqueItems.add(item.category);
    })

    return uniqueItems.size;
  }

  const itemsDiferentes = quantityDifferenItems()

  return { totalItems, itemsAcabando, itemsRecentes, itemsDiferentes }
}