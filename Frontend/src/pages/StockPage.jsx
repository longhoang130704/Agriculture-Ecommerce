import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";

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

  const [currentCategory, setCurrentCategory] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);

  const [filterProducts, setFilterProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeSort, setTypeSort] = useState("sellPrice");
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    if (!products) return;

    let filtered = products;

    if (currentCategory) {
      filtered = filtered.filter(
        (product) => product.categoryId._id === currentCategory._id
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = [...filtered].sort((a, b) => {
      if (typeSort === "sellPrice") {
        return asc ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice;
      } else if (typeSort === "expiredDate") {
        return asc
          ? new Date(a.expiredDate) - new Date(b.expiredDate)
          : new Date(b.expiredDate) - new Date(a.expiredDate);
      }
      return 0;
    });

    setFilterProducts(filtered);
  }, [currentCategory, typeSort, asc, searchTerm, products]);

  // console.log(filterProducts);

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
    if (editTable || addTable || addCategory || editCategory) {
      main?.classList.add("pointer-events-none", "opacity-50");
    } else {
      main?.classList.remove("pointer-events-none", "opacity-50");
    }
  }, [editTable, addTable, addCategory, editCategory]);

  // toast.success("Chào mừng trở lại!!!");

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
        <AddProduct
          categories={categories}
          products={products}
          setProducts={setProducts}
          setAddTable={setAddTable}
        />
      ) : addCategory ? (
        <AddCategory
          setAddCategory={setAddCategory}
          categories={categories}
          setCategories={setCategories}
        />
      ) : (
        editCategory && (
          <EditCategory
            categories={categories}
            setCategories={setCategories}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
            editingCategory={editingCategory}
            currentCategory={currentCategory}
          />
        )
      )}
      <div
        id="main"
        className=" 2xl:w-[99vw] flex flex-col items-center justify-start relative h-full gap-6 xl:gap-20 bg-[#FFF4EE] py-20 px-10"
      >
        <nav>NAVBAR: ...</nav>
        <div className="w-full flex flex-col 2xl:flex-row items-center justify-center md:justify-around gap-6 xl:gap-4 xl:px-3">
          <Category
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
            setCategories={setCategories}
            setEditingCategory={setEditingCategory}
          />
          <FilterCell
            asc={asc}
            setAsc={setAsc}
            typeSort={typeSort}
            setTypeSort={setTypeSort}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-4 md:gap-28">
          <AddCategoryButton setAddCategory={setAddCategory} />
          <AddProductButton setAddTable={setAddTable} />
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pt-3">
        {filterProducts.map((product, index) => {
            if (product.sellPrice !== 0)
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
