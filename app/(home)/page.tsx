import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/Booking-item";
import BarbershopItem from "./_components/bardershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {

  const barbershop = await db.barbershop.findMany();
  return (
    <div>

      <Header />
      <div className="px-5 pt-5">
        <h1 className="text-xl font-bold">Olá, LB!</h1>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="p-5">
        <h2 className="text-sm uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
        <BookingItem />
      </div>
      <div className="mt-6">
        <h2 className="px-5 text-sm uppercase text-gray-400 font-bold mb-3">Recomendados</h2>

        <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

    </div>
  );
}
