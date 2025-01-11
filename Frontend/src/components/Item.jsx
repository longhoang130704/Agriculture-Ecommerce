import cr_iamge from '../assets/images/carrot.jpg'
import cart_icon from '../assets/icons/cart_item.png' // sample icon
const Item = () => {
  const formatCurrency = (number) => {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formattedNumber} VND`;
  }
  const item = {
    name: 'Carrot',
    price: 20000,
    image: cr_iamge, // another image to test border
  }

  return (
      <div className='w-[280px] h-[390px] box-border flex flex-col justify-between items-center px-4 py-3.5  relative bg-white border-[2.2px] border-solid border-[#997C70] shadow-[5px_4px_4px_#8EB486] rounded-[40px]'>
        <img className='w-[100%] max-h-[45%] rounded-[22px]  flex-none flex-grow-0' src={item.image} alt="" />
        <span className='font-normal text-[32px] leading-[44px] text-center text-black flex-none flex-grow-0'>{item.name}</span>
        <span className='font-normal text-[24px] leading-[36px] text-center text-[#C5D724] flex-none flex-grow-0'>{formatCurrency(item.price)}</span>
        <div className='box-border flex justify-center items-center px-5 py-1.5 gap-2.5 border-[2.2px] border-[#8EB486] border-solid rounded-full cursor-pointer'>
          <span className='flex justify-center items-center h-[100%] w-[70%] font-normal text-[20px] leading-[30px] text-center text-black flex-none flex-grow-0'>Add to cart</span> 
          <img src={cart_icon} alt="" />
        </div>
      </div>
  )
}

export default Item
