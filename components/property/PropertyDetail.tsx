import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{property.name}</h1>

      {/* Rating + Location */}
      <div className="flex items-center space-x-4 mt-2 text-gray-600">
        <span className="text-yellow-500 font-semibold">
          ⭐ {property.rating}
        </span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* Add more demo images */}
        <img src={property.image} className="w-full h-48 object-cover rounded-lg" />
        <img src={property.image} className="w-full h-48 object-cover rounded-lg" />
      </div>

      {/* Tabs (simple placeholder for now) */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-gray-700 mt-2">{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap gap-3 mt-3">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
