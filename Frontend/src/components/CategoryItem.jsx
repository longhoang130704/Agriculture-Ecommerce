import axios from "axios";
import { toast } from "sonner";

const CategoryItem = (prop) => {
  const category = prop.category;

  const handleRightClick = (event) => {
    event.preventDefault();
    prop.setRightMouse(category.categoryName);
  };

  //console.log(category);

  const handleDelete = async () => {
    const cf = confirm("Are you sure you want to delete this category?");
    if (cf) {
      console.log("delete");
      try {
        const response = await axios.delete(
          `https://agri-eco-order-component.onrender.com/api/category/${category._id}`
        );
        console.log(response.data);

        prop.setCategories(
          prop.categories.filter((item) => item._id !== category._id)
        );
        toast.success("Xóa phân loại thành công!!");
      } catch (error) {
        toast.error("Xóa phân loại không thành công!!");

        console.log("Error when delete category" + error);
      }
    }
  };

  return (
    <div
      onClick={() => {
        if (category !== prop.currentCategory)
          prop.setCurrentCategory(category);
        else prop.setCurrentCategory(null);
      }}
      onContextMenu={(event) => {
        handleRightClick(event);
        prop.setEditingCategory(category);
      }}
      className="relative flex flex-col min-w-[160px] items-center justify-center cursor-pointer"
    >
      <img
        className={`border-solid w-32 h-32 object-cover rounded-full border-8 ${
          prop.currentCategory === category
            ? "border-pink-400"
            : "border-gray-100"
        }`}
        src={category.imageUrl}
        alt=""
      />
      <span className="font-quicksand font-bold text-[32px] leading-[40px] text-[#000000]">
        {category.categoryName}
      </span>
      <div
        className={`${
          prop.rightMouse === category.categoryName ? "" : "hidden"
        } absolute bottom-0 right-0 flex flex-col bg-black rounded-md px-2 py-3 gap-1 items-center justify-center`}
      >
        <span
          className="text-[#FFE5E5] font-quicksand text-7"
          onClick={(e) => {
            e.stopPropagation();
            prop.setEditCategory(true);
          }}
        >
          Chỉnh sửa
        </span>
        <hr className="w-full border-[#887E7E] border-solid border-[1px]" />
        <span
          className="text-[#FFE5E5] font-quicksand text-7"
          onClick={handleDelete}
        >
          Xóa phân loại
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
