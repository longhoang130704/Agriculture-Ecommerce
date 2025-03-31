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
      <div className="relative w-1/2 mt-10" onClick={() => setRightMouse("")}>
        <div className="scroll-category flex items-center gap-4 px-6">
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
