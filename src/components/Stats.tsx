import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bidhan">100+</h2>
            <p className="text-lg font-semibold text-gray-700 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bidhan">250M+</h2>
            <p className="text-lg font-semibold text-gray-700 mt-2">Lines of Code Typed</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bidhan">300K+</h2>
            <p className="text-lg font-semibold text-gray-700 mt-2">Cups of Coffee Sipped</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bidhan">
              <span>&#8734;</span>
            </h2>
            <p className="text-lg font-semibold text-gray-700 mt-2">Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
