import magnifierIcon from '../assets/icons/magnifierIcon.png'
import increaseIcon from '../assets/icons/increaseIcon.png'
import decreaseIcon from '../assets/icons/decreaseIcon.png'
import { useEffect, useState } from 'react'

const FilterCell = () => {
  const [sortAttribute, setSortAttribute] = useState('increase')
  const [typeSort, setTypeSort] = useState('price')
  const handleTypeOfSort = (event) => {
    setTypeSort(event.target.value);        
  }
  const handleFind = () => {
    let findElement = document.getElementById("findInput");
    let findValue = findElement.value;
    console.log("findInput: " + findValue);
  }
  useEffect(() => {

  }, [])
  return (
    <div  className="flex justify-center items-center gap-3 border-solid cursor-pointer box-border w-[580px] h-[90px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px]">
        <div  className="flex justify-center items-center gap-2 border-solid cursor-pointer box-border w-[300px] h-[60px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px]">
            <input id='findInput' placeholder='Tìm kiếm...' className="font-quicksand font-normal text-[20px] leading-[25px] text-[#000000]"
                
            />

            <img src={magnifierIcon} onClick={handleFind} alt="" />
        </div>
            <img className={`border-solid border-2 rounded-full ${sortAttribute === 'increase' ? 'border-[#28BBFF]' : 'border-gray-400'}`} src={increaseIcon} onClick={() => setSortAttribute('increase')} alt="" />
           
            <select id="filterSort" onChange={handleTypeOfSort} className="w-[15%] cursor-pointer font-quicksand font-bold text-[20px] leading-[25px] text-center text-[#000000] flex-none flex-grow-0">
                <option className='w-[25px] h-[20px] font-quicksand font-normal text-[16px] leading-[20px] text-[#000000] box-border bg-[#C5C5C5] border border-black' value="price">Giá</option>
                <option className='w-[25px] h-[20px] font-quicksand font-normal text-[16px] leading-[20px] text-[#000000] box-border bg-[#C5C5C5] border border-black' value="expiredDate">Ngày hết hạn</option>
            </select>

            <img className={`border-solid border-2 rounded-full ${sortAttribute === 'decrease' ? 'border-[#28BBFF]' : 'border-gray-400'}`} src={decreaseIcon} onClick={() => setSortAttribute('decrease')} alt="" />
    </div>
  )
}

export default FilterCell
