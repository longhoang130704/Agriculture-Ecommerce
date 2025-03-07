import exitIcon from '../assets/icons/exitIconYellow.png'

const BonusPopup = (prop) => {
    const item = prop.item
    
  return (
    <div className='fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[730px] flex flex-col justify-center items-center gap-5 bg-[#FFEAB8] border-solid border-4 border-[#FCBC28] rounded-[40px] box-border'>
        <div className='flex flex-col justify-center items-center w-[78%] h-[85%] gap-6'>
            <img className='w-full h-[50%] rounded-[40px]' src={item.image} alt={item.name} />
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>{item.name}</span>
            <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#000000]'>Hạn sử dụng: <span className='font-quicksand font-bold text-[28px] leading-[36px] text-center text-[#FF0000]'>Quá {item.expired} ngày</span>
            </span>
            <div className='flex flex-col items-center justify-center mt-12 pb-32'>
                <span className='font-quicksand font-bold text-[32px] leading-[40px] text-center text-[#000000]'>Đã loại bỏ khỏi</span>
                <span className='font-quicksand font-bold text-[32px] leading-[40px] text-center text-[#000000]'>gian hàng và kho !</span>
            </div>
        </div>
        <div onClick={() => {prop.setShowPopup(false)}} className='absolute bottom-4 right-4 flex flex-row justify-end items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#FCBC28] rounded-[40px] box-border cursor-pointer'>
            <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Thoát</span>
            <img className='w-[34px] h-[34px] p-1' src={exitIcon} alt="" />
        </div>
    </div>
  )
}

export default BonusPopup
