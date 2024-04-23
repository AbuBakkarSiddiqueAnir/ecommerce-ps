import CardSm from "../ui/card-sm";

export default function RecentProducts({ products }) {
  return (
    <section className="p-16 ">
      <h2 className="text-h-sm mb-8">
        <span className="text-teal-medium">New</span> Arrivals
      </h2>
      <div className="w-full grid xl:grid-cols-7  gap-8 ">
        {products.map((product) => (
          <CardSm product={product} />
        ))}
      </div>
    </section>
  );
}
