import exitIcon from '../assets/icons/close_cartitem.png'
import adjustPrice from '../assets/icons/adjustPriceIconGreen.png'
import { formatCurrency } from '../lib/utils'

const DiscountPopup = (prop) => {
    const item = prop.item
    
    
  return (
    <div className='fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[730px] flex flex-col justify-center items-center gap-2 bg-[#D7FFCF] border-solid border-4 border-[#69C456] rounded-[40px] box-border'>
        <div className='flex flex-col justify-center items-center w-[78%] h-[85%] gap-6'>
            <img className='w-full h-[50%] mt-10 rounded-[40px]' src={item.image} alt={item.name} />
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>{item.name}</span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Giá cũ: <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#FF1601]'>{formatCurrency(item.price)} VND</span>
            </span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Đề xuất: Giảm {item.discountPercent*100}%</span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Giá mới: <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#352BFF]'>{formatCurrency(item.price*(1-item.discountPercent))} VND</span>
            </span>
        </div>
        <div className='flex items-center justify-between h-[15%] w-full p-16'>
            <div onClick={() => {prop.setShowPopup(false)}} className='flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer'>
                <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Thoát</span>
                <img className='w-[34px] h-[34px] p-1' src={exitIcon} alt="" />
            </div>
            <div className='flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer'>
                <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Điều chỉnh giá</span>
                <img className='w-[34px] h-[34px] p-1' src={adjustPrice} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DiscountPopup
