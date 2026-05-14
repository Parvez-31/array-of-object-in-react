import { IndianRupee, Pill } from "lucide-react";
import type { SubMedicine } from "../typescript/interface/medicine.interface";
type SubMedicineType = {
  subMedicine: SubMedicine;
};
const SubMedicineList = ({ subMedicine }: SubMedicineType) => {
  return (
    <>
      <div
        className="border border-gray-400 flex flex-col gap-1 p-2 rounded-lg shadow-md"
        key={subMedicine.id}
      >
        <p className="flex gap-2">
          <span>
            <Pill className="text-green-800 w-4" />
          </span>
          <span>{subMedicine.name}</span>
        </p>
        <p className="text-gray-400">{subMedicine.quantity}</p>
        <p className="flex gap-2">
          <span>
            <IndianRupee className="text-green-800 w-4" />
          </span>
          <span className="font-semibold">{subMedicine.price}</span>
        </p>
      </div>
    </>
  );
};

export default SubMedicineList;
