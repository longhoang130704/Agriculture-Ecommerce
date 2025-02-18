import itemImage from '../assets/images/carrot.jpg'

const item = {
        name: 'Carrot',
        image: itemImage
    }

const ChartItem = () => {
    
  return (
    <div className='flex items-center gap-11 pl-1 py-1 w-[470px] bg-[#FFFFFF] border-solid border-[5px] border-[#997C70] rounded-[50px] box-border'>
      <img className='w-[66px] h-[66px] bg-[#D9D9D9] flex-none flex-grow-0 rounded-full' src={item.image} alt="" />
      <span className='w-[71px] h-[30px] font-quicksand font-normal text-[24px] leading-[30px] text-center text-[#000000] flex-none flex-grow-0'>{item.name}</span>
    </div>
  )
}

export const ShortChartItem = () => {
    return (
    <div className='flex items-center gap-11 pl-1 py-1 w-[240px] bg-[#FFFFFF] border-solid border-[5px] border-[#997C70] rounded-[50px] box-border'>
        <img className='w-[66px] h-[66px] bg-[#D9D9D9] flex-none flex-grow-0 rounded-full' src={item.image} alt="" />
        <span className='w-[71px] h-[30px] font-quicksand font-normal text-[24px] leading-[30px] text-center text-[#000000] flex-none flex-grow-0'>{item.name}</span>
    </div>
    )
}

export default ChartItem
