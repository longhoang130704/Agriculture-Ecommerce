import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import "./webkit.css";

const Category = (prop) => {
  const categories = prop.categories;

  const [rightMouse, setRightMouse] = useState("");

  useEffect(() => {
    
    if (prop.editCategory) {
      setRightMouse('')
    }
  }, [prop.editCategory])

  return (
    <>
      <div className="relative w-3/4 md:w-2/3 xl:w-1/2 mt-6 sm:mt-10" onClick={() => setRightMouse("")}>
        <div className="scroll-category flex items-center gap-2 sm:gap-4 px-4 sm:px-6 overflow-x-auto">
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={index}
                category={category}
                categories={categories}
                editCategory={prop.editCategory}
                setEditCategory={prop.setEditCategory}
                rightMouse={rightMouse}
                setRightMouse={setRightMouse}
                currentCategory={prop.currentCategory}
                setCurrentCategory={prop.setCurrentCategory}
                setCategories={prop.setCategories}
                setEditingCategory={prop.setEditingCategory}
              />
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Category;
