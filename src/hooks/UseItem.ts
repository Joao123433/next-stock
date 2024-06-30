import { ItemContext } from "@/contexts/ItemContext";
import { useContext } from "react";

export function UseItem() {
  const context = useContext(ItemContext)

  return context
}