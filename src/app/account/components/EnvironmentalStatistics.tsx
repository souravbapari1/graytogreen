import React from "react";

const EnvironmentalStatistics: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-11/12 md:w-3/4 lg:w-2/3">
        <h1 className="text-4xl text-green-700 font-bold text-center mb-8">
          Environmental Statistics
        </h1>

        {/* Carbon Offset Section */}
        <div className="bg-white border-t-[5px] border-primary rounded-lg shadow-lg p-6 mb-8 hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-bold text-green-600 border-b-2 border-green-600 pb-2 mb-4">
            Carbon Offset
          </h2>
          <ul className="list-none">
            <li className="text-lg mb-3">
              Hectare Restored:{" "}
              <span className="font-bold text-green-700">12 Kha</span>
            </li>
            <li className="text-lg mb-3">
              Number of Planted Trees:{" "}
              <span className="font-bold text-green-700">500,000</span>{" "}
              <span className="font-bold text-red-500">
                (Target: 1,000,000)
              </span>
            </li>
            <li className="text-lg mb-3">
              CO2 Removal:{" "}
              <span className="font-bold text-green-700">
                100,000 tons/year
              </span>{" "}
              <span className="font-bold text-red-500">
                (Target: 150,000 tons/year)
              </span>
            </li>
            <li className="text-lg mb-3">
              CO2 Storage:{" "}
              <span className="font-bold text-green-700">50,000 kg/year</span>
            </li>
            <li className="text-lg mb-3">
              Air Quality Improvement:{" "}
              <span className="font-bold text-green-700">200 kg/year</span>
            </li>
            <li className="text-lg mb-3">
              Rain Observed:{" "}
              <span className="font-bold text-green-700">
                300,000 liters/year
              </span>
            </li>
            <li className="text-lg mb-3">
              Energy Saved:{" "}
              <span className="font-bold text-green-700">50,000 KwH/year</span>
            </li>
          </ul>
        </div>

        {/* Plastic Offset Section */}
        <div className="bg-white  border-t-[5px] border-primary rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-bold text-green-600 border-b-2 border-green-600 pb-2 mb-4">
            Plastic Offset
          </h2>
          <ul className="list-none">
            <li className="text-lg mb-3">
              Kg of Collected Plastic:{" "}
              <span className="font-bold text-green-700">20,000 kg</span>
            </li>
            <li className="text-lg mb-3">
              Kg of Recycled Plastic:{" "}
              <span className="font-bold text-green-700">15,000 kg</span>
            </li>
          </ul>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          <p>
            Data as of 2024. All targets are based on environmental goals for
            this year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalStatistics;
