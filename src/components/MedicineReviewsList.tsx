import { Star, User } from "lucide-react";
import type { Review } from "../typescript/interface/medicine.interface";
type ReviewDetailsProps = {
  reviewDetails: Review;
};
const MedicineReviewsList = ({ reviewDetails }: ReviewDetailsProps) => {
  return (
    <>
      <div
        key={reviewDetails.id}
        className="border border-gray-400 flex flex-col gap-1
                          p-2 rounded-lg shadow-md"
      >
        <p className="flex gap-2">
          <span>
            <User className="text-green-800 w-4" />
          </span>
          <span>{reviewDetails.user}</span>
        </p>
        <p className="text-gray-400">{reviewDetails.comment}</p>
        <p className="flex gap-2">
          <span>
            <Star className="text-yellow-500 w-4" />
          </span>
          <span>{reviewDetails.rating}</span>
        </p>
      </div>
    </>
  );
};

export default MedicineReviewsList;
