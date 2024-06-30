import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()

  return (
    <>
      <h1 className="text-5xl">Stock Items</h1>
      <section className="border-solid border-b border-white flex gap-4">
        <Link 
          href="/items/Items" 
          className={`text-white hover:text-blue-500 pb-4 ${pathname === "/items/Items" ? "border-b-4" : ""}`}
        >
          Todos os Items
        </Link>
        <Link 
          href="/items/NewItems" 
          className={`text-white hover:text-blue-500 pb-4 ${pathname === "/items/NewItems" ? "border-b-4" : ""}`}
        >
          Novo Item
        </Link>
      </section>
      <section className="h-4/6">
        {children}
      </section>
    </>
  )
}