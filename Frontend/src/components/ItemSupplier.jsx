import { useState, useEffect } from 'react'
import axios from 'axios'
import detailIcon from '../assets/icons/detail.png'
import deleteIcon from '../assets/icons/delete.png'
import { formatCurrency } from '../lib/utils'
const ItemSupplier = (prop) => {
  const item = prop.item
  const [inventory, setInventory] = useState(null)
  //console.log(item.inventoryId);
  //console.log(item);

//   useEffect(() => {
//     const fetchInventory = async () => {
//         try {
//             const response = await axios.get(`https://agri-eco-order-component.onrender.com/api/inventory/${item.inventoryId}`)
//             console.log(response.data);
//             setInventory(response.data)
//         }
//         catch (error) {
//             console.log('Error when fetch categories' + error);
//         }
//     }
//     fetchInventory()
// }, [item.inventoryId])

  const handleDeleteProduct = async () => {
    let confirmDelete = window.confirm('Are you sure you want to delete this product?')
    if(confirmDelete) {
      try {
        const response = await axios.delete(`https://agri-eco-order-component.onrender.com/api/product/${item._id}`)
        console.log(response.data);
        prop.setProducts(prop.products.filter((product) => product._id !== item._id));
      }
      catch (error){
        console.log('Error when delete product' + error);
      }
    } else {
      console.log('Delete product cancelled')
    }

  }
  const handleEditProduct = () => {
    prop.setCurrentProduct(item)
    prop.setEditTable(true)
    console.log('Edit product')
  }

  return (
    <>
      <div className='w-[280px] h-[390px] scale-105 box-border flex flex-col justify-between items-center px-4 py-3.5  relative bg-white border-[2.2px] border-solid border-[#997C70] shadow-[5px_4px_4px_#8EB486] rounded-[40px]'>
        <img className='w-[100%]w-full max-h-[180px] sm:max-h-[39%] rounded-[22px] object-cover' src={item.imageUrl} alt="" />
        <span className='font-quicksand font-bold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[44px] text-center text-black overflow-hidden whitespace-nowrap text-ellipsis w-full'>{item.productName}</span>
        <span className='font-quicksand font-normal text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] text-center text-black'>Kho: chua lay duoc</span>
        <span className='font-normal text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] text-center text-[#C5D724]'>
        {formatCurrency(item.sellPrice)} VND</span>

        <div className='w-[90%] box-border flex justify-center items-center gap-2 py-2 '>
          <div onClick={handleEditProduct} className='flex justify-center items-center w-[55%] sm:w-[58%] bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer py-2 sm:py-0'>
            <span className='flex justify-center items-center h-full w-[70%] pl-2 font-quicksand font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-center text-black'>Chi tiết</span>
            <img className='w-6 h-6 sm:w-[36px] sm:h-[36px] p-1' src={detailIcon} alt="" />
          </div>
          <div onClick={handleDeleteProduct} className='flex justify-center items-center w-[35%] sm:w-[40%] bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer py-2 sm:py-0'>
            <span className='flex justify-center items-center h-full w-[70%] pl-2 font-quicksand font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-center text-black'>Xoá</span>
            <img className='w-6 h-6 sm:w-[36px] sm:h-[36px] p-1' src={deleteIcon} alt="" />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ItemSupplier
