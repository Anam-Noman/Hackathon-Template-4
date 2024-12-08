import React from 'react';

export default function HeroSection () {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-lime-50"
        style={{
          width: '100%',
          height: '764px',
          top: '122px',
        }}
      >
        {/* Left Image */}
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            top: '100px',
            left: '0%',
            borderRadius: '8px',
          }}
        >
          <img
            src="image 32.png"
            alt="Left Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            top: '375px',
            left: '325px',
            borderRadius: '8px',
          }}
        >
          <img
            src="header text.png"
            alt=""
            className=""
          />
           <img
            src="shop now button.png"
            alt=""
            className=""
          />
        </div>

        {/* Right Image */}
        <div
          className="absolute"
          style={{
            width: '500px',
            height: '500px',
            top: '161px',
            left: '60%',
            border: '1px solid #000',
          }}
        >
          <img
            src="sofa promotional header.png"
            alt="Right Hero Section"
            className="w-full h-full object-cover"
          />
        </div>

        
      </div>

      {/* INTENTIONAL Vertical GAP between Hero Section & Featured Products */}
      <div style={{ height: '100px' }}></div>

      {/* Featured Products Section */}
      <div
        className="relative"
        style={{
          width: '100%',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">Featured Products</h2>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Product 1 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="image 1168.png"
              alt="Product 1"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 2 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="image 1.png"
              alt="Product 2"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 3 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="image 1169.png"
              alt="Product 3"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 4 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="image 3.png"
              alt="Product 4"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

