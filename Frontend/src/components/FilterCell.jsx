import magnifierIcon from '../assets/icons/magnifierIcon.png'
import increaseIcon from '../assets/icons/increaseIcon.png'
import decreaseIcon from '../assets/icons/decreaseIcon.png'
import { useEffect, useState } from 'react'

const FilterCell = (prop) => {
  const handleTypeOfSort = (event) => {
    prop.setTypeSort(event.target.value);     
  }
  const handleFind = () => {
    let findElement = document.getElementById("findInput");
    let findValue = findElement.value;
    console.log("findInput: " + findValue);
    prop.setSearchTerm(findValue)
  }
  useEffect(() => {

  }, [])
  return (
    <div className="flex flex-wrap justify-center items-center w-3/4 md:w-2/3 lg:w-2/3 gap-3 border-solid cursor-pointer box-border h-auto sm:h-[90px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px] p-4 md:p-2">
        <div  className="flex justify-center items-center gap-2 border-solid cursor-pointer box-border w-full sm:w-[300px] lg:w-2/5 h-[50px] sm:h-[60px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px] px-3 py-8">
            <input id='findInput' onChange={handleFind} placeholder='Tìm kiếm...' 
              className="font-quicksand font-normal pl-1 text-[28px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-[#000000] w-full outline-none"
            />
            <img src={magnifierIcon} onClick={handleFind} alt="" />
        </div>
        <div className='flex justify-center items-center gap-4 lg:w-[50%]'>
          <img className={`border-solid border-2 rounded-full ${prop.asc ? 'border-[#28BBFF]' : 'border-gray-400'} w-14 h-14 sm:w-10 sm:h-10 cursor-pointer`} src={increaseIcon} onClick={() => prop.setAsc(true)} alt="" />
          
          <select id="filterSort" onChange={handleTypeOfSort} className=" w-2/5 sm:w-[30%] md:w-[15%] lg:w-[30%] cursor-pointer font-quicksand font-bold text-[24px] leading-[20px] sm:leading-[25px] text-center text-[#000000] bg-[#FFFFFF] border border-[#A52223] rounded-[20px] p-1 pr-2">
              <option className='text-[14px] sm:text-[16px] bg-[#C5C5C5] border border-black' value="sellPrice">Giá</option>
              <option className='text-[14px] sm:text-[16px] bg-[#C5C5C5] border border-black' value="expiredDate">Ngày hết hạn</option>
          </select>

          <img className={`border-solid border-2 rounded-full ${!prop.asc ? 'border-[#28BBFF]' : 'border-gray-400'} w-14 h-14 sm:w-10 sm:h-10 cursor-pointer`} src={decreaseIcon} onClick={() => prop.setAsc(false)} alt="" />
        </div>
    </div>
  )
}

export default FilterCell
