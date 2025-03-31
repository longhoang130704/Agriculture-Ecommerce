import { useState } from "react";
import confirmEdit from "../assets/icons/adjustPriceIconGreen.png";
import exitIcon from "../assets/icons/close_cartitem.png";
import checkIcon from "../assets/icons/visibleCheckIcon.png";
import Input, { TextAreaInput } from "../components/Input";
import axios from "axios";
import { toast } from "sonner";

const EditProduct = (prop) => {
  const currentProduct = prop.currentProduct;
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
      content: currentProduct.productName,
    },
    description: {
      title: "Mô tả",
      id: "description",
      content: currentProduct.description,
    },
    imageUrl: {
      title: "Đường dẫn hình ảnh",
      id: "imageUrl",
      content: currentProduct.imageUrl,
    },
    brand: {
      title: "Nhãn hiệu",
      id: "brand",
      content: currentProduct.brand,
    },
    quantityPerUnit: {
      title: "Khối lượng mỗi đơn vị",
      id: "quantityPerUnit",
      content: currentProduct.quantityPerUnit,
    },
    buyPrice: {
      title: "Giá mua vào",
      id: "buyPrice",
      content: currentProduct.buyPrice,
    },
    sellPrice: {
      title: "Giá bán ra",
      id: "sellPrice",
      content: currentProduct.sellPrice,
    },
    rating: {
      title: "Đánh giá trung bình",
      id: "rating",
      content: currentProduct.rating,
    },
    numberReviews: {
      title: "Tổng số đánh giá",
      id: "numberReviews",
      content: currentProduct.numberReviews,
    },
    harvestDay: {
      title: "Ngày thu hoạch",
      id: "harvestDay",
      content: currentProduct.harvestDay,
    },
    stock_quantity: {
      title: "Số lượng",
      id: "stock_quantity",
      content: currentProduct.stock_quantity,
    },
  };
  const [checked, setChecked] = useState(true);
  const [imageUrl, setLinkImage] = useState(product.imageUrl.content);

  const handleCheckboxClick = () => {
    const productImage = document.getElementById("productImage");
    const checkboxCell = document.getElementById("checkVisible");
    const labelImage = document.getElementById("imageLabelEdit");

    if (!checked) {
      productImage.classList.remove("hidden");
      checkboxCell.setAttribute("checked", "true");
      // labelImage.classList.remove('bg-[#C1C1C1]').add('bg-[#C4FFB8]')
    } else {
      productImage.classList.add("hidden");
      checkboxCell.setAttribute("checked", "false");
      // labelImage.classList.remove('bg-[#C4FFB8]').add('bg-[#C1C1C1]')
    }
    setChecked(!checked);
  };
  const closeEditForm = (event) => {
    event.preventDefault();
    prop.setEditTable(false);
    console.log("close");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log("-----------------EditFormData-------------------------");

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log("------------------------------------------");
    try {
      const res = await axios.put(
        `https://agri-eco-order-component.onrender.com/api/product/${currentProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      prop.setProducts(
        prop.products.map((p) => (product._id === p._id ? res.data : p))
      );
      toast.success("Chỉnh sửa sản phẩm thành công!!");
    } catch (error) {
      console.log("Error when update product" + error);
      toast.error("Chỉnh sửa sản phẩm không thành công!!");
    }
    prop.setEditTable(false);
  };
  const handleFileChange = () => {
    console.log("handle file change");
  };

  console.log(currentProduct);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3/4  md:w-1/2 pb-4 px-2 bg-[#C4FFB8] rounded-[40px]">
      <form action="post" onSubmit={handleSubmit} className="flex">
        <div className="flex flex-col pl-10 pt-6 pr-4 gap-4 w-1/2">
          <div className="flex items-center justify-center">
            <input
              type="file"
              name="imageEdit"
              id="imageEdit"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              className="font-quicksand font-normal text-[20px] leading-[28px] text-center underline text-black w-[400px] h-[200px] justify-center flex items-center  bg-[#C1C1C1] rounded-[20px] cursor-pointer"
              htmlFor="imageEdit"
              id="imageLabelEdit"
            >
              {checked && imageUrl ? (
                <img
                  src={imageUrl}
                  className="w-full h-full object-cover rounded-[20px]"
                  alt="Image preview"
                />
              ) : (
                "Choose a file"
              )}
            </label>
          </div>
          <Input prop={product.imageUrl} setLinkImage={setLinkImage} />
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
              className="w-full h-[72px] md:h-[48px] bg-[#C4FFB8]  pl-4 py-1.5 border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[28px] md:text-[24px] leading-[30px] text-[#000000]"
            />
          </div>
          <Input prop={product.stock_quantity} />
          <Input prop={product.quantityPerUnit} />
          <Input prop={product.brand} />
          <div className="relative flex items-center justify-start gap-6 pt-2 pl-2">
            <img
              src={checkIcon}
              id="productImage"
              className="pointer-events-none absolute top-3 left-3 w-10 h-10 cursor-pointer"
              alt=""
            />
            <input
              id="checkVisible"
              type="checkbox"
              onChange={handleCheckboxClick}
              className="appearance-none w-11 h-11 bg-white border border-solid border-[#8EB486] rounded-[10px] checked:border-blue-500 checked:ring-2 checked:ring-blue-500"
            />
            <span className="w-[209px] h-[30px] font-quicksand font-bold text-[20px] leading-[28px] text-[#000000]">
              Hiển thị sản phẩm
            </span>
          </div>
        </div>
        <div className="flex flex-col pl-4 pt-6 pr-10 gap-5 w-1/2">
          <Input prop={product.productName} />
          <Input prop={product.buyPrice} />
          <Input prop={product.sellPrice} />
          <Input prop={product.rating} />
          <Input prop={product.numberReviews} />
          <Input prop={product.description} />
          <div className="flex justify-end pt-10 gap-2">
            <button
              onClick={closeEditForm}
              className= "md:p-2 bg-[#C4FFB8] flex justify-between items-center h-14 md:h-12 border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer"
            >
              <span className="font-quicksand font-bold text-[24px] md:text-[18px] leading-[22px] text-center text-[#000000]">
                Thoát
              </span>
              <img
                className="hidden 2xl:block w-10 h-10 p-1"
                src={exitIcon}
                alt=""
              />
            </button>
            <button
              type="submit"
              className="bg-[#C4FFB8] md:p-2 flex justify-between items-center h-14 md:h-12 border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer"
            >
              <span className="font-quicksand font-bold text-[24px] md:text-[18px] leading-[22px] text-center text-[#000000]">
                Xác nhận chỉnh sửa
              </span>
              <img
                className="hidden 2xl:block w-10 h-10 p-1"
                src={confirmEdit}
                alt=""
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
