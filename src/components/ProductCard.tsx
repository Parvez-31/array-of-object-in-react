import { IndianRupee, Pill } from "lucide-react";
import type { Medicine } from "../typescript/interface/medicine.interface";
import MedicineReviewsList from "./MedicineReviewsList";
import SubMedicineList from "./SubMedicineList";

type MedicineCardProps = {
  medicineDetails: Medicine;
};

const ProductCard = ({ medicineDetails }: MedicineCardProps) => {
  return (
    <>
      <div
        key={medicineDetails.id}
        className="border border-gray-500 p-4 rounded-lg max-w-[300px]"
      >
        <section className="">
          <h2 className="text-gray-400 uppercase text-sm font-mono tracking-[1px]">
            Medicine Name
          </h2>
          <p className="font-bold my-2">{medicineDetails.name}</p>
          <p>
            {medicineDetails.available ? (
              <span className="text-green-800 font-semibold">Available</span>
            ) : (
              <span className="text-red-800 font-semibold">Not Available</span>
            )}
          </p>
          <hr className="my-2 bg-gray-400" />

          <h2 className="text-gray-400 uppercase text-sm font-mono tracking-[1px]">
            Description
          </h2>
          <p className="text-[14px] text-gray-500 mb-2">
            {medicineDetails.description}
          </p>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-gray-400 text-[14px] font-bold uppercase">
                Price
              </p>
              <p className="flex gap-2">
                <span>
                  <IndianRupee className="text-green-800 w-4" />
                </span>
                <span>{medicineDetails.price}</span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-[14px] font-bold uppercase">
                Stock
              </p>
              <p className="bg-green-300 py-[2px] px-[4px] rounded-lg">
                {medicineDetails.stock} units
              </p>
            </div>
          </div>

          <hr className="my-4 bg-gray-400" />

          {/* category */}

          <h2 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
            category
          </h2>
          <p>{medicineDetails.category}</p>

          <hr className="my-4 bg-gray-400" />

          {/* Manufacturer */}

          <section>
            <h2 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
              manufacturer
            </h2>
            <div className="flex gap-2">
              <p className="text-gray-600">
                {medicineDetails.manufacturer.name} .{" "}
              </p>
              <p>{medicineDetails.manufacturer.country} . </p>
              <p>{medicineDetails.manufacturer.establishedYear}</p>
            </div>
          </section>

          <hr className="my-4 bg-gray-400" />

          {/* Dosage */}

          <section>
            <h2 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
              dosage
            </h2>
            <div className="flex gap-2">
              <p className="text-gray-600">
                {medicineDetails.dosage.frequency} .
              </p>
              <p>{medicineDetails.dosage.strength} . </p>
              <p className="text-gray-600">{medicineDetails.dosage.type}</p>
            </div>
          </section>

          <hr className="my-4 bg-gray-400" />

          {/* subMedicine */}

          <section>
            <h2 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
              subMedicines
            </h2>
            <div className="flex flex-col gap-3">
              {medicineDetails.subMedicines.map((subMedicine) => {
                return (
                  <SubMedicineList
                    key={subMedicine.id}
                    subMedicine={subMedicine}
                  />
                );
              })}
            </div>
          </section>

          <hr className="my-4 bg-gray-400" />

          {/* Review */}

          <section>
            <h2 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
              reviews
            </h2>
            <div className="flex flex-col gap-3">
              {medicineDetails.reviews.map((review) => {
                return (
                  <MedicineReviewsList key={review.id} reviewDetails={review} />
                );
              })}
            </div>
          </section>

          <hr className="my-4 bg-gray-400" />

          <section>
            <h3 className="text-gray-400 uppercase text-sm mb-1 font-mono tracking-[1px]">
              tags
            </h3>
            <div className="flex gap-5">
              {medicineDetails.tags.map((tag, i) => {
                return (
                  <p key={i} className="">
                    <span className="bg-purple-200 text-purple-800 font-semibold py-[2px] px-[6px] rounded-lg">
                      {tag}
                    </span>
                  </p>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ProductCard;
