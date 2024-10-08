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

// Test 1
// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://carapi.app/api/models?sort=toyota");
//   const { make, model, year } = car;

//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('modelYear', `${year}`);

//   return `${url}`;
// }

// Test 2
// export const getCarModels = async () => {
//   const url = 'https://carapi.app/api/models?sort=name&direction=desc';

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.data; // Assuming the API returns a "data" field with the models
//   } catch (error) {
//     console.error('Failed to fetch car models:', error);
//     return null; // Return null in case of an error
//   }
// };

// Test 3
export const generateCarImageBackground = (car: CarProps, angle?: string) => {
    const url = new URL("https://cars-image-background-removal.p.rapidapi.com/v1/results?mode=fg-image");
    const { make, model, year } = car;
  
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('modelYear', `${year}`);
  
    return `${url}`;
  }