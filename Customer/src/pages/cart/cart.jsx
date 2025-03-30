import React from "react";
import { StoreContext } from "../../context/StoreContext";
import "./cart.css";
import CartTag from "../../components/cartItem/cartTag";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import arrow_icon_w from "../../assets/ICON/login_icon.png";

const cart = () => {
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const token = localStorage.getItem("token");
  const { cartItems, food_list, removeFromCart, addtoCart } =
    useContext(StoreContext);
  const [products, setProducts] = useState([]); // Danh sách sản phẩm

  useEffect(() => {
    axios
      .get(`https://agri-eco-order-component.onrender.com/api/product`)
      .then((response) => {
        const apiProducts = response.data.map((product) => ({
          id: product._id,
          productName: product.productName,
          image: product.imageUrl,
          sellPrice: product.sellPrice,
        }));
        setProducts(apiProducts); // Cập nhật danh sách sản phẩm
        // setLoading(false); // Đánh dấu đã tải xong
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err); // Ghi log lỗi vào console
        setError("Không thể tải dữ liệu sản phẩm.");
        setLoading(false);
      });
  }, []);
  return (
    <div className="cart">
      <div className="cart-items">
        {products.map((item, index) => {
          if (cartItems[item.id] > 0) {
            if (token) {
              return (
                <CartTag
                  key={index}
                  id={item.id}
                  name={item.productName}
                  image={item.image}
                  quantity={cartItems[item.id]}
                  price={item.sellPrice}
                  removeFromCart={removeFromCart}
                  addtoCart={addtoCart}
                />
              );
            } else {
              <div>Bạn phải đăng nhập để dùng giỏ hàng</div>;
            }
          }
        })}
        <div className="total">
          {token ? (
            <>
              <hr />
              Tổng (tạm tính):{" "}
              {formatCurrency(
                products.reduce((total, item) => {
                  if (cartItems[item.id] > 0) {
                    return total + cartItems[item.id] * item.sellPrice;
                  }
                  return total;
                }, 0)
              )}
            </>
          ) : (
            <div>Bạn phải đăng nhập để dùng giỏ hàng</div>
          )}
        </div>
      </div>
      <div className="address relative">
        <form className="shiping-infor">
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Province/City" />
          <input type="text" placeholder="District" />
          <input type="text" placeholder="Ward" />
          <input type="text" placeholder="Stress" />
          <input type="text" placeholder="Note for del" />
        </form>
        <div className="flex justify-end mt-4">
          <button className="flex items-center p-2 rounded-full border-2 border-[#ffe629] bg-white">
            <span className="mr-2">Đặt hàng</span>
            <img src={arrow_icon_w} className="w-7 h-7" alt="Order" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;