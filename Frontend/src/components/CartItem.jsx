import cb_image from '../assets/images/cabbage.jpg'
import plus_icon from '../assets/icons/plus_cartitem.png'
import minus_icon from '../assets/icons/minus_cartitem.png'
import close_icon from '../assets/icons/close_cartitem.png'

const CartItem = () => {
  const formatCurrency = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const formatAmount = (number) => {
    if(number < 10) return `0${number}`
  }
  const item = {
      name: 'Cabbage',
      price: 106000,
      image: cb_image, // another image to test border
      amount: 4,
  }
  return (
    <div className="bg-slate-200 box-border flex items-center px-2.5 py-2 justify-between relative w-[950px] h-[90px] border-3 border-solid border-white rounded-full">
      <div className='h-auto w-auto overflow-hidden flex items-center '>
        <img className='w-[70px] h-[70px] object-cover border-0 rounded-full' src={item.image} alt="" />
      </div>
      <span className="font-jost font-normal text-[20px] leading-[28px] text-center text-black flex-none flex-grow-0">
        {item.name}
      </span>
      <div className='box-border flex justify-center items-center px-3.5 py-2 gap-2.5 border-[2.2px] border-solid border-[#8EB486] rounded-full flex-none flex-grow-0'>
        <img className='cursor-pointer' src={minus_icon} alt="" />
        <span>{formatAmount(item.amount)}</span>
        <img className='cursor-pointer' src={plus_icon} alt="" />
      </div>
      <span className='font-jost font-normal text-[20px] leading-[28px] text-center text-black flex-none flex-grow-0'>
        sub: {formatCurrency(item.price)}
      </span>
      <div className='h-full flex items-center flex-none flex-grow-0'>
        <img className='max-w-8 max-h-8 cursor-pointer' src={close_icon} alt="" />
      </div>
    </div>
  )
}

export default CartItem
