import magnifierIcon from '../assets/icons/magnifierIcon.png'
import increaseIcon from '../assets/icons/increaseIcon.png'
import decreaseIcon from '../assets/icons/decreaseIcon.png'

const FilterCell = () => {
  return (
    <div  className="flex justify-center items-center gap-3 border-solid cursor-pointer box-border w-[580px] h-[90px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px]">
        <div  className="flex justify-center items-center gap-2 border-solid cursor-pointer box-border w-[300px] h-[60px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px]">
            <input placeholder='Tìm kiếm...' className="font-quicksand font-normal text-[20px] leading-[25px] text-[#000000]"
                
            />

            <img src={magnifierIcon} alt="" />
        </div>
            <img src={increaseIcon} alt="" />
           
            <select id="filterSort" className="w-[16%] cursor-pointer font-quicksand font-bold text-[20px] leading-[25px] text-center text-[#000000] flex-none flex-grow-0">
                <option className='w-[25px] h-[20px] font-quicksand font-normal text-[16px] leading-[20px] text-[#000000] box-border bg-[#C5C5C5] border border-black' value="price">Giá</option>
                <option className='w-[25px] h-[20px] font-quicksand font-normal text-[16px] leading-[20px] text-[#000000] box-border bg-[#C5C5C5] border border-black' value="expiredDate">Ngày hết hạn</option>
            </select>

            <img src={decreaseIcon} alt="" />
    </div>
  )
}

export default FilterCell
