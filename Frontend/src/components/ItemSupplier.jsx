import cr_iamge from '../assets/images/carrot.jpg'
import detailIcon from '../assets/icons/detail.png'
import deleteIcon from '../assets/icons/delete.png'
import { formatCurrency } from '../lib/utils'
const ItemSupplier = () => {
  const item = {
    name: 'Carrot',
    price: 20000,
    image: cr_iamge, // another image to test border
    stock: 106
  }

  return (
      <div className='w-[280px] h-[390px] box-border flex flex-col justify-between items-center px-4 py-3.5  relative bg-white border-[2.2px] border-solid border-[#997C70] shadow-[5px_4px_4px_#8EB486] rounded-[40px]'>
        <img className='w-[100%] max-h-[45%] rounded-[22px]  flex-none flex-grow-0' src={item.image} alt="" />
        <span className='font-quicksand font-bold text-[32px] leading-[44px] text-center text-black flex-none flex-grow-0'>{item.name}</span>
        <span className='font-quicksand font-normal text-[20px] leading-[24px] text-center text-black'>Kho: {item.stock}</span>
        <span className='font-normal text-[24px] leading-[36px] text-center text-[#C5D724] flex-none flex-grow-0'>{formatCurrency(item.price)} VND</span>
        <div className='w-[90%] box-border flex justify-center items-center gap-2 py-2 '>
          <div className='flex justify-center items-center w-[58%]   bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer'>
            <span className='flex justify-center items-center h-[100%] w-[70%] pl-2 font-quicksand font-bold text-[20px] leading-[28px] text-center text-black'>Chi tiết</span>
            <img className='w-[36px] h-[36px] p-1' src={detailIcon} alt="" />
          </div>
          <div className='flex justify-center items-center w-[40%] bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer'>
            <span className='flex justify-center items-center h-[100%] w-[70%] pl-2 font-quicksand font-bold text-[20px] leading-[28px] text-center text-black'>Xoá</span>
            <img className='w-[36px] h-[36px] p-1' src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
  )
}

export default ItemSupplier
