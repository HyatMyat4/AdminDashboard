"use client";
import Link from "next/link";
type Props = {
  category: string;
  isActive: string | undefined;
};

const Category = ({ category, isActive }: Props) => {
  return (
    <a
      href={`#${category}`}
      key={category}
      className={`${
        isActive === category
          ? "Header-Button-Active select-none"
          : "Header-Button-Sleep select-none"
      }`}
    >
      {category}
    </a>
  );
};

export default Category;
