import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Category from "./../components/Category";
import FilterCell from "./../components/FilterCell";
import AddProductButton from "./../components/AddProductButton";
import AddCategoryButton from "./../components/AddCategoryButton";

import ItemSupplier from "./../components/ItemSupplier";
import ItemSupplierGray from "../components/ItemSupplierGray";
import EditProduct from "../components/EditProduct";
import AddProduct from "../components/AddProduct";
import AddCategory from "../components/AddCategory";
import EditCategory from "../components/EditCategory";

const StockPage = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [editTable, setEditTable] = useState(false);
  const [addTable, setAddTable] = useState(false);
  const mainRef = useRef(null);

  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://agri-eco-order-component.onrender.com/api/product"
        );
        if (JSON.stringify(products) !== JSON.stringify(response.data)) {
          setProducts(response.data);
        }
        //console.log(response.data);
      } catch (error) {
        console.log("Error when fetch products" + error);
      }
    };
    fetchProducts();
  }, [products]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://agri-eco-order-component.onrender.com/api/category"
        );
        if (JSON.stringify(categories) !== JSON.stringify(response.data)) {
          setCategories(response.data);
        }
        //console.log(response.data);
      } catch (error) {
        console.log("Error when fetch categories" + error);
      }
    };
    fetchCategories();
  }, [categories]);

  useEffect(() => {
    const main = mainRef.current || document.getElementById("main");
    if (editTable || addTable) {
      main?.classList.add("pointer-events-none", "opacity-50");
    } else {
      main?.classList.remove("pointer-events-none", "opacity-50");
    }
  }, [editTable, addTable]);

  //console.log(categories);
  

  return (
    <>
      {editTable ? (
        <EditProduct
          products={products} 
          setProducts={setProducts}
          setEditTable={setEditTable}
          currentProduct={currentProduct}
        />
      ) : addTable ? (
        <AddProduct categories={categories} products={products} setProducts={setProducts} setAddTable={setAddTable} />
      ) : addCategory ? (
        <AddCategory setAddCategory={setAddCategory} categories={categories} setCategories={setCategories} />
      ) : (
        <></>
      )}
      <div
        id="main"
        className="flex flex-col items-center justify-start relative w-screen h-full gap-20 bg-[#FFF4EE] py-20"
      >
        <nav>NAVBAR: ...</nav>
        <div className="w-full flex items-center justify-around gap-12">
          <Category
            categories={categories}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
            setCategories={setCategories}
          />
          <FilterCell />
        </div>
        <div className="flex items-center justify-center gap-28">
          <AddCategoryButton setAddCategory={setAddCategory} />
          <AddProductButton setAddTable={setAddTable} />
        </div>
        <div className="grid grid-cols-5 gap-12 pt-3">
          {products.map((product, index) => {
            if (product.buyPrice !== 0)
              return (
                <ItemSupplier
                  products={products}
                  setProducts={setProducts}
                  setEditTable={setEditTable}
                  setCurrentProduct={setCurrentProduct}
                  key={index}
                  item={product}
                />
              );
            else
              return (
                <ItemSupplierGray
                  products={products}
                  setProducts={setProducts}
                  setEditTable={setEditTable}
                  setCurrentProduct={setCurrentProduct}
                  key={index}
                  item={product}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default StockPage;
