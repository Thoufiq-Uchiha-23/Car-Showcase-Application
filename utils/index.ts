// import { HeartIcon } from "@heroicons/react/20/solid";

import { CarProps } from "@/types";

// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "3c39d78115msh289d418388b62b0p156f23jsnf5d2761e5e68",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "3c39d78115msh289d418388b62b0p156f23jsnf5d2761e5e68",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

const url = 'https://all-cars-names-image-and-variants-info.p.rapidapi.com/vehicles/Audi/audi_r8_coupe/Ibis_white.png';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3c39d78115msh289d418388b62b0p156f23jsnf5d2761e5e68',
		'x-rapidapi-host': 'all-cars-names-image-and-variants-info.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // 093ts6hwg_ypo24fwtm_w9zmbsf1p
  const url = new URL('https://api.carscan.com/v3.0/recall?vin=1GNALDEK9FZ108495')
};
