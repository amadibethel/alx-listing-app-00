import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";

const filters = [
  "Top Villa", "Self Checkin", "Free Parking", "Beachfront", "Pet Friendly", "Mountain View"
];

export default function Home() {
  return (
    <div className="space-y-10 py-6">
      {/* Hero Section */}
      <section
        className="h-64 bg-cover bg-center text-white flex flex-col items-center justify-center rounded-lg"
        style={{ backgroundImage: "url('https://example.com/hero.jpg')" }}
      >
        <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-2">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
