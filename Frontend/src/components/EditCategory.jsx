import { useState } from "react";
import confirmEdit from "../assets/icons/adjustPriceIconGreen.png";
import closeIcon from "../assets/icons/close_category.png";
import Input from "./Input";
import axios from "axios";
import { toast } from "sonner";

let categoryAttribute = {
  categoryName: {
    title: "Tên phân loại",
    id: "categoryName",
  },
  imageUrl: {
    title: "Đường dẫn hình ảnh",
    id: "imageUrl",
  },
  description: {
    title: "Mô tả",
    id: "description",
  },
};
const EditCategory = (prop) => {
  const category = prop.editingCategory || prop.currentCategory;

  categoryAttribute.categoryName.content = category.categoryName;
  categoryAttribute.imageUrl.content = category.imageUrl;
  categoryAttribute.description.content = category.description;

  //console.log(categoryAttribute);

  const [imageUrl, setLinkImage] = useState(category.imageUrl);

  const closeEditForm = (event) => {
    event.preventDefault();
    prop.setEditCategory(false);
    console.log("close");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log("---------EditFormData----------");

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log("--------------------");

    try {
      const response = await axios.put(
        `https://agri-eco-order-component.onrender.com/api/category/${category._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      prop.setCategories(
        prop.categories.map((item) =>
          item._id === category._id ? response.data : item
        )
      );
      toast.success("Chỉnh sửa phân loại thành công!!");
    } catch (err) {
      toast.error("Chỉnh sửa phân loại không thành công!!");

      console.log("Error when update category" + err);
    }
    prop.setEditCategory(false);
  };
  const handleFileChange = () => {
    console.log("handle file change");
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#C4FFB8] w-full rounded-[40px] relative flex flex-col items-center justify-center">
        <span className="font-quicksand font-bold text-[36px] leading-[45px] text-center text-[#000000] p-9">
          CHỈNH SỬA PHÂN LOẠI
        </span>
        <img
          src={closeIcon}
          onClick={closeEditForm}
          className="absolute top-6 right-6 w-10 h-10 cursor-pointer"
          alt=""
        />

        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full h-full flex items-center justify-center gap-10"
        >
          <div className="w-1/2 pl-8 flex flex-col items-start justify-start gap-10">
            <input
              type="file"
              name="imageEdit"
              id="imageEdit"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              className="font-quicksand font-normal text-[20px] leading-[28px] text-center underline text-black w-full h-[210px] justify-center flex items-center  bg-[#D9D9D9] rounded-[20px] cursor-pointer"
              htmlFor="imageEdit"
              id="imageLabelEdit"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  className="w-full h-full object-cover rounded-[20px]"
                  alt="Error Image Link"
                />
              ) : (
                "Choose a file"
              )}
            </label>
            <button
              type="submit"
              className="bg-transparent p-1 mb-8 flex justify-center items-center gap-1 border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer"
            >
              <span className="font-quicksand font-bold pl-1 text-[16px] leading-[20px] text-center text-[#000000]">
                Xác nhận
              </span>
              <img className="w-[34px] h-[34px] p-1" src={confirmEdit} alt="" />
            </button>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-4 pr-10 pb-6">
            <Input prop={categoryAttribute.categoryName} />
            <Input
              prop={categoryAttribute.imageUrl}
              setLinkImage={setLinkImage}
            />
            <div className="flex flex-col items-start gap-1 w-full">
              <label
                htmlFor={categoryAttribute.description.id}
                className="w-full font-quicksand font-bold text-[20px] leading-[28px] text-[#000000] flex-none self-stretch flex-grow-0"
              >
                {categoryAttribute.description.title}
              </label>
              <textarea
                id={categoryAttribute.description.id}
                defaultValue={categoryAttribute.description.content}
                required
                name={categoryAttribute.description.id}
                rows={3}
                type="text"
                className="w-full resize-none bg-[#C4FFB8] pl-4 py-1.5 border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[24px] leading-[30px] text-[#000000]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
