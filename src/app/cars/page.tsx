import Image from 'next/image';

const CarList = () => {
  const carData = [
    { id: 1, name: "Toyota", price: 15000, description: "Luxury car", image: '/car1.jpeg' },
    { id: 2, name: "Mercedes", price: 5000, description: "Luxury car", image: '/car2.jpeg' },
    { id: 3, name: "Mercedes", price: 8000, description: "Luxury car", image: '/car3.jpeg' },
    { id: 4, name: "Mercedes", price: 5000, description: "Luxury car", image: '/car4.jpeg' },
    { id: 5, name: "Mercedes", price: 3000, description: "Luxury car", image: '/car8.jpeg' },
    { id: 6, name: "Toyota", price: 19000, description: "Luxury car", image: '/car6.jpeg' },
  ];

  return (
    <div className="flex flex-wrap m-0 bg-slate-300">
      {carData.map((car) => (
        <div key={car.id} className="w-1/3 p-2 box-border text-center">
          <Image
            src={car.image}
            alt={car.name}
            width={600} // Specify the width
            height={600} // Specify the height
            className="w-full h-48 object-cover mb-5"
          />
          <h3 className="text-lg text-black font-bold">{car.name}</h3>
          <p className="text-sm text-black italic">{car.description}</p>
          <p className="text-base text-black font-bold">Price: ${car.price}</p>
          <button
            className="px-2 py-2  bg-blue-600 text-white border-none rounded-full cursor-pointer mt-1"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarList;

