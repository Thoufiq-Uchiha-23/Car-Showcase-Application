import Image from "next/image";
import { ContainerFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars()
   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Car Catalogue Section */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars yo might like</p>
        </div>

        {/* Filters */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <ContainerFilter title="fuel" />
            <ContainerFilter title="year" /> */}
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            WE HAVE CARS
          </section>
        ) : <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
        </div> }

      </div>
    </main>
  );
}
