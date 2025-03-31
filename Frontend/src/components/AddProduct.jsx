import { useState } from "react";
import confirmAdd from "../assets/icons/adjustPriceIconGreen.png";
import closeIcon from "../assets/icons/close_cartitem.png";
import checkIcon from "../assets/icons/visibleCheckIcon.png";
import Input, { TextAreaInput } from "../components/Input";
import axios from "axios";
import { toast } from "sonner";

const info = {
  supplierName: "Khoa co.", // fake
};

const product = {
  supplierId: {
    title: "",
    id: "supplierId",
    content: "67dbb09b784946e74d0cb022", // fake
  },
  inventoryId: {
    title: "",
    id: "inventoryId",
    content: "67dbb09b784946e74d0cb0d3", // hardcode
  },
  productName: {
    title: "Tên sản phẩm",
    id: "productName",
  },
  description: {
    title: "Mô tả",
    id: "description",
  },
  imageUrl: {
    title: "Đường dẫn hình ảnh",
    id: "imageUrl",
  },
  brand: {
    title: "Nhãn hiệu",
    id: "brand",
  },
  quantityPerUnit: {
    title: "Khối lượng mỗi đơn vị",
    id: "quantityPerUnit",
  },
  buyPrice: {
    title: "Giá mua vào",
    id: "buyPrice",
  },
  sellPrice: {
    title: "Giá bán ra",
    id: "sellPrice",
  },
  rating: {
    title: "Đánh giá trung bình",
    id: "rating",
  },
  numberReviews: {
    title: "Tổng số đánh giá",
    id: "numberReviews",
  },
  harvestDay: {
    title: "Ngày thu hoạch",
    id: "harvestDay",
  },
  stock_quantity: {
    title: "Số lượng",
    id: "stock_quantity",
  },
};

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const formattedDate = `${year}:${month}:${day}`;

const AddProduct = (prop) => {
  // const categories = prop.categories

  const categories = prop.categories;

  //console.log(categories);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(false);

  const [imageUrl, setLinkImage] = useState("");

  const [checked, setChecked] = useState(false);
  const handleCheckboxClick = () => {
    const productImage = document.getElementById("productImage");
    const checkboxCell = document.getElementById("checkVisible");
    const labelImage = document.getElementById("imageLabelAdd");

    if (!checked) {
      productImage.classList.remove("hidden");
      checkboxCell.setAttribute("checked", "true");
    } else {
      productImage.classList.add("hidden");
      checkboxCell.setAttribute("checked", "false");
    }
    setChecked(!checked);
  };
  const closeAddForm = (event) => {
    event.preventDefault();
    prop.setAddTable(false);
    console.log("close");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    if (!selectedCategory) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    formData.append("categoryId", selectedCategory);
    formData.append("inventoryId", product.inventoryId.content);
    formData.append("supplierId", product.supplierId.content);

    console.log("-----------------AddFormData-------------------------");

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log("------------------------------------------");
    try {
      const res = await axios.post(
        "https://agri-eco-order-component.onrender.com/api/product",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      prop.setProducts(prop.products.concat(res.data));
      toast.success("Thêm sản phẩm thành công!!");
    } catch (error) {
      toast.error("Thêm sản phẩmphẩm không thành công!!");

      console.log("Error when create product" + error);
    }
    prop.setAddTable(false);
  };
  const handleFileChange = () => {
    console.log("handle file change");
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col w-[90%] md:w-2/3 2xl:w-3/4 h-auto bg-[#FFF4EE] gap-6 py-6">
        <span className="font-quicksand font-bold text-[36px] leading-[45px] text-center text-[#000000]">
          THÊM SẢN PHẨM
        </span>
        <div className="w-full flex h-[90%] flex-col md:flex-row justify-center items-start gap-6 px-4">
          <div className="w-full p-6 md:w-[65%] h-[90%] bg-[#C4FFB8] rounded-[40px]">
            <form action="" onSubmit={handleSubmit} className="flex">
              <div className="flex flex-col pl-6 pt-6 pr-4 gap-3 w-1/2">
                <input
                  type="file"
                  name="imageAdd"
                  id="imageAdd"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  className="font-quicksand font-normal text-[20px] leading-[28px] text-center underline text-black w-full h-full md:w-full md:h-[200px] justify-center flex items-center  bg-[#D9D9D9] rounded-[20px] cursor-pointer"
                  htmlFor="imageAdd"
                  id="imageLabelAdd"
                >
                  {checked && imageUrl ? (
                    <img
                      src={imageUrl}
                      className="w-full h-full object-cover rounded-[20px]"
                      alt="Error Image Link"
                    />
                  ) : (
                    "Choose a file"
                  )}
                </label>
                <Input prop={product.imageUrl} setLinkImage={setLinkImage} />
                <Input prop={product.stock_quantity} />
                <div className="flex flex-col items-start gap-1 w-full pl-1">
                  <label
                    htmlFor={product.harvestDay.id}
                    className="w-full h-[24px] font-quicksand font-bold text-[20px] leading-[28px] text-[#000000] flex-none self-stretch flex-grow-0"
                  >
                    {product.harvestDay.title}
                  </label>
                  <input
                    id={product.harvestDay.id}
                    defaultValue={product.harvestDay.content}
                    required
                    name={product.harvestDay.id}
                    type="date"
                    className="w-full h-[48px] bg-[#C4FFB8]  pl-4 py-1.5 border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[24px] leading-[30px] text-[#000000]"
                  />
                </div>
                <Input prop={product.quantityPerUnit} />
                <Input prop={product.brand} />
              </div>
              <div className="flex flex-col pl-4 pt-6 pr-6 gap-3 w-1/2">
                <Input prop={product.productName} />
                <Input prop={product.buyPrice} />
                <Input prop={product.sellPrice} />
                <Input prop={product.numberReviews} />
                <Input prop={product.rating} />
                <TextAreaInput prop={product.description} />
              </div>
              <button
                onClick={closeAddForm}
                className="bg-[#FFF4EE] md:p-2 absolute bottom-8  md:bottom-10 md:right-[225px] flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer"
              >
                <span className="font-quicksand font-bold pl-3 md:pl-1 text-[20px] leading-[25px] text-center text-[#000000]">
                  Thoát
                </span>
                <img 
                  className="w-[34px] h-[34px] p-1" 
                  src={closeIcon} 
                  alt="" />
              </button>
              <button
                type="submit"
                className="bg-[#FFF4EE] md:p-2 absolute bottom-8 right-10 md:bottom-10 md:right-4 flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer"
              >
                <span className="font-quicksand font-bold pl-3 md:pl-1 text-[20px] leading-[25px] text-center text-[#000000]">
                  Xác nhận thêm
                </span>
                <img
                  className="w-[34px] h-[34px] p-1"
                  src={confirmAdd}
                  alt=""
                />
              </button>
              
            </form>
          </div>
          <div className="flex items-start pr-3 justify-around md:flex-col md:gap-10 pb-6 md:pb-0 pt-8 w-full md:w-[30%] h-[75%] bg-[#0FFFC3] rounded-[40px]">
            <div className="flex flex-col pl-7 gap-0.5">
              <span className="text-left font-quicksand font-bold text-[24px] leading-[30px] text-[#2F2F2F]">
                Nhà cung cấp
              </span>
              <span className="md:w-[356px] md:h-[38px] font-quicksand font-normal text-[20px] leading-[25px] text-[#2F2F2F]">
                {info.supplierName} (bạn)
              </span>
            </div>
            <div className="flex flex-col pl-7 gap-2">
              <span className="font-quicksand font-bold text-[24px] leading-[30px] text-[#2F2F2F]">
                Thời gian thêm sản phẩm
              </span>

              <span className="md:w-[356px] md:h-[38px] font-quicksand font-normal text-[20px] leading-[25px] text-[#2F2F2F]">
                {formattedDate} GMT+7
              </span>
            </div>

            <div className="flex flex-col gap-3 pb-10 pl-5 md:max-w-[90%]">
              <label
                htmlFor="categories"
                className=" w-full h-[24px] font-quicksand font-bold text-[20px] leading-[28px] text-[#000000] flex-none self-stretch flex-grow-0"
              >
                Chọn phân loại
              </label>
              <select
                id="categories"
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
                name="categories"
                defaultValue=""
                className="w-auto md:w-full md:h-[48px] bg-[#C4FFB8] pl-1 md:pl-2 py-1.5 md:border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[24px] leading-[30px] text-[#000000]"
              >
                <option value="" disabled>
                  Chọn phân loại
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              {error && (
                <p style={{ color: "red" }}>Vui lòng chọn phân loại!</p>
              )}
            </div>

            <div className="relative flex items-center justify-start p-2 gap-6 pl-6">
              <img
                src={checkIcon}
                id="productImage"
                className="pointer-events-none absolute top-1.5 left-7 hidden w-10 h-10 cursor-pointer"
                alt=""
              />
              <input
                id="checkVisible"
                type="checkbox"
                onChange={handleCheckboxClick}
                className="appearance-none w-[47px] h-[47px] bg-white border border-solid border-[#8EB486] rounded-[10px] checked:border-blue-500 checked:ring-2 checked:ring-blue-500"
              />
              <span className="w-[209px] h-[30px] font-quicksand font-bold text-[24px] leading-[30px] text-[#000000]">
                Hiển thị sản phẩm
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
