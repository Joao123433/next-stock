import UseHomeInformation from "@/hooks/UseHomeInformation";
import Link from "next/link";

export default function Home() { 
  const { totalItems, itemsAcabando, itemsRecentes, itemsDiferentes } = UseHomeInformation()
  
  return (
    <>
      <h1 className="text-5xl">Dashboard</h1>
      <section className="flex flex-row gap-7 justify-between">
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Diversidade de Itens</p>
          <p className="text-center text-4xl mb-6">{itemsDiferentes}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Inventário total</p>
          <p className="text-center text-4xl mb-6">{totalItems}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Itens recentes</p>
          <p className="text-center text-4xl mb-6">{itemsRecentes.length}</p>
        </div>
        <div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
          <p>Itens acabando</p>
          <p className="text-center text-4xl mb-6">{itemsAcabando.length}</p>
        </div>
      </section>
      <section className="flex flex-row gap-7 justify-between">
        <table className="w-1/2">
          <thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
            <tr className="w-full flex justify-between">
              <th className="w-2/4 text-left">Itens Recentes</th>
              <th className="w-2/4">Ações</th>
            </tr>
          </thead>
          <tbody className="py-1 px-5 flex flex-col gap-5 mt-3">
            {itemsRecentes.length === 0
                ?
                <tr>
                  <td className="text-2xl bold">Sem Items Recentes...</td>
                </tr>
                :
                itemsRecentes.map(item => (
                  <tr className="w-full flex justify-between" key={item._id}>
                    <td className="w-2/4 text-left">{item.name}</td>
                    <td className="w-2/4 text-center">
                      <Link href={`/items/show/${item._id}`}>
                        <button className="px-4 py-2 hover:scale-110">Ver</button>
                      </Link>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
        <table className="w-1/2">
          <thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
            <tr className="w-full flex justify-between">
              <th className="w-2/6 text-left">Itens Acabando</th>
              <th className="w-2/6 text-left">Qtd.</th>
              <th className="w-2/6 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="py-1 px-5 flex flex-col gap-5 mt-3">
            {itemsAcabando.length === 0
              ?
              <tr>
                <td className="text-2xl bold">Sem Itens Acabando...</td>
              </tr>
              :
              itemsAcabando.map(item => [
                <tr className="w-full flex justify-between" key={item._id}>
                  <td className="w-2/6">{item.name}</td>
                  <td className="w-2/6">{item.amount}</td>
                  <td className="w-2/6">
                    <Link href={`/items/show/${item._id}`}>
                      <button className="px-4 py-2 hover:scale-110">Ver</button>
                    </Link>
                  </td>
                </tr>
              ])
            }
          </tbody>
        </table>
      </section>
    </>
  );
}