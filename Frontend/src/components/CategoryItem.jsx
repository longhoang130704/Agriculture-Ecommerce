import axios from 'axios'
const CategoryItem = (prop) => {
  const category = prop.category;
  // console.log(category);
  
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
          `https://agri-eco-order-component.onrender.com/api/category/${category._id}`)
          .then((res) => console.log(res.data)
          )
          prop.setCategories(prop.categories.filter((item) => item._id !== category._id));
      }
      catch (error) {
        console.log('Error when delete category' + error);
      }
    }
  };

  return (
    <div
      onClick={() => {
        prop.setCurrentCategories(category);
      }}
      onContextMenu={(event) => {
        handleRightClick(event);
      }}
      className="relative flex flex-col min-w-[160px] items-center justify-center cursor-pointer"
    >
      <img
        className={`border-solid w-32 h-32 object-cover rounded-full border-8 ${
          prop.currentCategories === category
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
          onClick={() => {
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
