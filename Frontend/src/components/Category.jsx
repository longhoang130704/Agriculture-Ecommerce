import { useState } from "react";
import CategoryItem from "./CategoryItem";
import "./webkit.css";
import EditCategory from "./EditCategory";

const Category = (prop) => {
  const categories = prop.categories;

  const [rightMouse, setRightMouse] = useState("");
  const [currentCategories, setCurrentCategories] = useState(categories[0]);

  return (
    <>
      <div className="relative w-1/2 mt-10" onClick={() => setRightMouse("")}>
        <div className="scroll-category flex items-center gap-4 px-6">
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={index}
                category={category}
                categories={categories}
                setEditCategory={prop.setEditCategory}
                rightMouse={rightMouse}
                setRightMouse={setRightMouse}
                currentCategories={currentCategories}
                setCurrentCategories={setCurrentCategories}
                setCategories={prop.setCategories}
              />
            );
          })}
        </div>
      </div>
      {prop.editCategory && (
        <EditCategory
          categories={categories}
          setCategories={prop.setCategories}
          setEditCategory={prop.setEditCategory}
          currentCategory={currentCategories}
        />
      )}
    </>
  );
};

export default Category;
