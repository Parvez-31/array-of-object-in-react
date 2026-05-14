import { medicines } from "../services/json/medicine.json";
import ProductCard from "./ProductCard";

const MedicineList = () => {
  return (
    <>
      <h1 className="bg-green-500 text-center py-3 font-bold text-2xl text-white font-mono">
        Medicine List
      </h1>
      <div className="flex flex-wrap gap-6 justify-center my-4">
        {medicines.map((medicine) => {
          return <ProductCard key={medicine.id} medicineDetails={medicine} />;
        })}
      </div>
    </>
  );
};

export default MedicineList;
