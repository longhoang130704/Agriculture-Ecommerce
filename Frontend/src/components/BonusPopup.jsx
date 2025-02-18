import lettuceImage from '../assets/images/lettuce.jpg'
import exitIcon from '../assets/icons/exitIconBlue.png'
import adjustPrice from '../assets/icons/adjustPriceIconBlue.png'
import { formatCurrency } from '../lib/utils'

const BonusPopup = () => {
    const item = {
        name: 'Xà lách',
        expired: 106,
        price: 106000,
        giftPrice: 0,
        image:lettuceImage
    }
    
  return (
    <div className='w-[500px] h-[730px] flex flex-col justify-center items-center gap-2 bg-[#D1E0FF] border-solid border-4 border-[#2D1AFF] rounded-[40px] box-border'>
        <div className='flex flex-col justify-center items-center w-[78%] h-[85%] gap-6'>
            <img className='w-full h-[50%] mt-10 rounded-[40px]' src={item.image} alt={item.name} />
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>{item.name}</span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Hạn sử dụng: Còn <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#2B48FF]'>{item.expired} </span>ngày
            </span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Giá: {formatCurrency(item.price)} VND</span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Giá tặng kèm: {formatCurrency(item.giftPrice)} VND
            </span>
        </div>
        <div className='flex items-center justify-between h-[15%] w-full p-16 '>
            <div className='flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#2B48FF] rounded-[40px] box-border cursor-pointer'>
                <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Thoát</span>
                <img className='w-[34px] h-[34px] p-1' src={exitIcon} alt="" />
            </div>
            <div className='flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#2B48FF] rounded-[40px] box-border cursor-pointer'>
                <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Điều chỉnh giá</span>
                <img className='w-[34px] h-[34px] p-1' src={adjustPrice} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BonusPopup
