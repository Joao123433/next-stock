import ItemsLayout from "@/components/ItemsLayout"
import { UseItem } from "@/hooks/UseItem";
import { ItemsFetch } from "@/interfaces | types/ItemsFetch";
import { useRouter } from "next/dist/client/router";
import Link from "next/link"

export default function ShowItem() {
  const { items, deleteItem } = UseItem()
  const router = useRouter()
  const item = items.find((item) => item._id == router.query.ShowItem)

  return (
    <ItemsLayout>
      <section className="flex justify-start">
        <div className="w-3/5 flex flex-col gap-5">
          <div className="flex gap-8">
            <h2 className="text-3xl">{item?.name}</h2>
            <div className="flex gap-4">
              <Link href={`/items/update/${item?._id}`} className="text-black">
                <button className="bg-white px-3 py-1 border-0 hover:scale-105 h-full">Atualizar</button>
              </Link>
              
              <Link href="/items/Items" className="text-black">
                <button className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105 h-full" onClick={() => { deleteItem(item?._id as string) }}>Excluir</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="py-4 px-7 bg-zinc-900 rounded-lg">
              <p>Categoria: {item?.category}</p>
            </div>
            <div className="py-4 px-7 bg-zinc-900 rounded-lg">
              <p>Quantidade em estoque: {item?.amount}</p>
            </div>
            <div className="py-4 px-7 bg-zinc-900 rounded-lg">
              <p>Preço: R$ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item?.price as number)}</p>
            </div>
          </div>

          <div>
            <p className="text-xl">{item?.description}</p>
          </div>

          <div className="flex gap-4">
            <p>Cadastrado em: {item?.createdAt 
              ? 
                new Intl.DateTimeFormat("pt-BR", 
                { year: "numeric", month: "numeric", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
                .format(new Date(item?.createdAt as Date)) 
              : 
                ""
              }
            </p>
            <p>Cadastrado em: {item?.updatedAt 
              ? 
                new Intl.DateTimeFormat("pt-BR", 
                { year: "numeric", month: "numeric", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
                .format(new Date(item?.updatedAt as Date)) 
              : 
                ""
              }
            </p>
          </div>
        </div>
      </section>
    </ItemsLayout>
  )
}