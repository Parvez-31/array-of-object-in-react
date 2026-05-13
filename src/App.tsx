import { IndianRupee, Pill, Star, User } from "lucide-react";
import "./App.css";
import { medicines } from "./services/json/medicine.json";
const App = () => {
  // console.log(medicines.map((item) => item.name));
  return (
    <>
      <h1 className="bg-green-500 text-center py-3 font-bold text-2xl text-white mb-4">
        Medicine List
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {medicines.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-500 p-4 rounded-lg max-w-[300px]"
            >
              <section className="">
                <h2 className="text-gray-400 uppercase text-sm">
                  Medicine Name
                </h2>
                <p className="font-bold my-2">{item.name}</p>
                <p>
                  {item.available ? (
                    <span className="text-green-800 font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-800 font-semibold">
                      Not Available
                    </span>
                  )}
                </p>
                <hr className="my-2 bg-gray-400" />

                <h2 className="text-gray-400 uppercase text-sm">Description</h2>
                <p className="text-[14px] text-gray-500 mb-2">
                  {item.description}
                </p>

                {/* Price and Stock */}
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-[14px] font-bold uppercase">
                      Price
                    </p>
                    <p className="flex gap-2">
                      <span>
                        <IndianRupee className="text-green-800 w-4" />
                      </span>
                      <span>{item.price}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[14px] font-bold uppercase">
                      Stock
                    </p>
                    <p className="bg-green-300 py-[2px] px-[4px] rounded-lg">
                      {item.stock} units
                    </p>
                  </div>
                </div>
                <hr className="my-4 bg-gray-400" />
                {/* catagory */}
                <h2 className="text-gray-400 uppercase text-sm mb-1">
                  catagory
                </h2>
                <p>{item.category}</p>

                <hr className="my-4 bg-gray-400" />
                {/* manufacturer */}
                <section>
                  <h2 className="text-gray-400 uppercase text-sm mb-1">
                    manufacturer
                  </h2>
                  <div className="flex gap-2">
                    <p className="text-gray-600">{item.manufacturer.name} . </p>
                    <p>{item.manufacturer.country} . </p>
                    <p>{item.manufacturer.establishedYear}</p>
                  </div>
                </section>
                <hr className="my-4 bg-gray-400" />

                {/* Dosage */}
                <section>
                  <h2 className="text-gray-400 uppercase text-sm mb-1">
                    dosage
                  </h2>
                  <div className="flex gap-2">
                    <p className="text-gray-600">{item.dosage.frequency} . </p>
                    <p>{item.dosage.strength} . </p>
                    <p className="text-gray-600">{item.dosage.type}</p>
                  </div>
                </section>
                <hr className="my-4 bg-gray-400" />

                <section>
                  <h2 className="text-gray-400 uppercase text-sm mb-1">
                    subMedicines
                  </h2>
                  <div className="flex flex-col gap-3">
                    {item.subMedicines.map((item) => {
                      return (
                        <div
                          className="border border-gray-400 flex flex-col gap-1 p-2 rounded-lg shadow-md"
                          key={item.id}
                        >
                          <p className="flex gap-2">
                            <span>
                              <Pill className="text-green-800 w-4" />
                            </span>
                            <span>{item.name}</span>
                          </p>
                          <p className="text-gray-400">{item.quantity}</p>
                          <p className="flex gap-2">
                            <span>
                              <IndianRupee className="text-green-800 w-4" />
                            </span>
                            <span className="font-semibold">{item.price}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
                <hr className="my-4 bg-gray-400" />

                {/* Review */}
                <section>
                  <h2 className="text-gray-400 uppercase text-sm mb-1">
                    reviews
                  </h2>
                  <div className="flex flex-col gap-3">
                    {item.reviews.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="border border-gray-400 flex flex-col gap-1
                          p-2 rounded-lg shadow-md"
                        >
                          <p className="flex gap-2">
                            <span>
                              <User className="text-green-800 w-4" />
                            </span>
                            <span>{item.user}</span>
                          </p>
                          <p className="text-gray-400">{item.comment}</p>
                          <p className="flex gap-2">
                            <span>
                              <Star className="text-yellow-500 w-4" />
                            </span>
                            <span>{item.rating}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
                <hr className="my-4 bg-gray-400" />

                {/* tags */}
                <section>
                  <h3 className="text-gray-400 uppercase text-sm mb-1">tags</h3>
                  <div className="flex gap-5">
                    {item.tags.map((item, i) => {
                      return (
                        <p key={i} className="">
                          <span className="bg-purple-200 text-purple-800 font-semibold py-[2px] px-[6px] rounded-lg">
                            {item}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </section>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
