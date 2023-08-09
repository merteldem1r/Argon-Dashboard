import { UpdatesList } from "../../dashboard/components/Updates/UpdatesList.tsx";
import { CarouselBox } from "../../dashboard/components/Carousel/CarouselBox.tsx";
import { SalesByCountry } from "../../dashboard/components/Sales/SalesByCountry.tsx";
import { SalesOverview } from "../../dashboard/components/Sales/SalesOverview.tsx";
import { Categories } from "../../dashboard/components/Categories/Categories.tsx";

export function Dashboard() {
  return (
    <section className="w-full">
      <UpdatesList />

      <section className="grid lg:grid-rows-1 lg:grid-cols-5 grid-cols-1 gap-6 my-10">
        <SalesOverview />
        <CarouselBox />
        <SalesByCountry />
        <Categories />
      </section>
    </section>
  )
}