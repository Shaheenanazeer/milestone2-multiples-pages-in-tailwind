import React from "react";

const HomeContact = () => {
  return (
    <div>
      <section
        className="hero flex items-start justify-center h-screen bg-cover bg-center p-5 text-black"
        style={{ backgroundImage: "url(car7.jpeg)" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Car World</h1>
          <p className="text-xl font-semibold">
            Your one-stop shop for the best cars
          </p>
          {/* <button>Shop now</button> */}
          <button className="px-4 py-2 mt-8 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
  Shop now
</button>

        </div>
      </section>
    </div>
  );
};

export default HomeContact;
