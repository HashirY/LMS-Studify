"use client";

import {
  FcEngineering,
  FcOldTimeCamera,
  FcMultipleDevices,
  FcFilmReel,
  FcMusic,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";

import { IconType } from "react-icons";

import { Category } from "@prisma/client";
import CategoryItem from "./category-item";

interface CategoryProps {
  items: Category[];
}

const IconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  Filming: FcFilmReel,
  Engineering: FcEngineering,
};

export const Categories = ({ items }: CategoryProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={IconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
