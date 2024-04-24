import { twMerge } from "tailwind-merge";

export default function Header({
  categories,
  handleSelectCategory,
  currentCategory,
}) {
  return (
    <header className="flex items-center mb-8">
      <h2 className="text-h-sm ">
        <span className="text-teal-medium">Best</span> Deals
      </h2>
      <ul className=" flex-1  flex justify-end gap-4 items-center">
        {categories.map((category) => (
          <li className="" key={category}>
            <button
              onClick={() => handleSelectCategory(category)}
              className={twMerge(
                "py-3  border-b-[4px] px-3 text-xl   uppercase border-transparent",
                category === currentCategory && "border-[#0AAEB9]"
              )}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
