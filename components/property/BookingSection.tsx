import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calcNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  };

  const total = calcNights() * price;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment: <strong>${total > 0 ? total : 0}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 w-full rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
