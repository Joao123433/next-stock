import ItemsLayout from "@/components/ItemsLayout";
import { UseItem } from "@/hooks/UseItem";
import Link from "next/link";

export default function Items() {
  const { items, deleteItem } = UseItem()

  return (
    <ItemsLayout>
      <div className="overflow-y-scroll h-full">
        <table className="min-w-full overflow-y-scroll">
          <thead className="bg-zinc-900 py-1 px-5 flex rounded-md">
            <tr className="w-full flex justify-around">
              <th className="py-2 text-left w-1/5">ID</th>
              <th className="py-2 text-left w-1/5">Nome</th>
              <th className="py-2 text-left w-1/5">Em Estoque</th>
              <th className="py-2 text-left w-1/5">Categoria</th>
              <th className="py-2 text-left w-1/4">Ações</th>
            </tr>
          </thead>
          <tbody className="py-1 px-5 flex flex-col">
          {items.length === 0 
            ?
            <tr>
              <td>
                <h1 className="text-3xl text-center mt-2">Insira Algum Item...</h1>
              </td>
            </tr>
            : 
            items.map((item) => (
              <tr className="w-full flex gap-4" key={item._id}>
                <td className="py-2 w-1/5 break-words">{item._id}</td>
                <td className="py-2 w-1/5">{item.name}</td>
                <td className="py-2 w-1/5">{item.amount} unid.</td>
                <td className="py-2 w-1/5">{item.category}</td>
                <td className="py-2 w-1/4 flex gap-5">
                  <Link href={`/items/show/${item._id}`} className="text-black">
                    <button className="bg-blue-500 px-3 py-1 border-0 hover:scale-105">
                      Ver
                    </button>
                  </Link>
                  <Link href={`/items/update/${item._id}`} className="text-black">
                    <button className="bg-white px-3 py-1 border-0 hover:scale-105">
                      Atualizar
                    </button>
                  </Link>
                  <button 
                    className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105" 
                    onClick={() => {deleteItem(item._id)}}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </ItemsLayout>
  )
}