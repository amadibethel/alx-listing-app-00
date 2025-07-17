import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
        <p className="text-gray-800 font-bold mt-2">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
