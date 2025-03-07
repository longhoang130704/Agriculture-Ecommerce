import bestSelling from '../assets/images/bestSellingCatagory.png'
import fruit from '../assets/images/fruitCategory.png'
import vegetable from '../assets/images/vegetableCategory.png'
import { useState } from 'react';

const Category = () => {

    const [categories, setCategories] = useState('best')
    

  return (
    <div className='flex justify-center items-center gap-4'>
        <div onClick={() => setCategories('best')} className='flex flex-col items-center justify-center gap-2 px-8 cursor-pointer'>
            <img 
                className={`border-solid rounded-full border-8 ${categories === 'best' ? 'border-pink-400' : 'border-gray-100'}`} 
                src={bestSelling} 
                alt="" 
            />
            <span className="font-quicksand font-bold text-[32px] leading-[40px] text-[#000000]">
                Bán chạy
            </span>

        </div>
        <div onClick={() => setCategories('fruit')} className='flex flex-col items-center justify-center gap-2 px-8 cursor-pointer'>
            <img
                className={`border-solid rounded-full border-8 ${categories === 'fruit' ? 'border-pink-400' : 'border-gray-100'}`}
                src={fruit} 
                alt="" 
            />
            <span className="font-quicksand font-bold text-[32px] leading-[40px] text-[#000000]">
                Trái cây
            </span>
        </div>
        <div onClick={() => setCategories('vegetable')} className='flex flex-col items-center justify-center gap-2 px-8 cursor-pointer'>
            <img 
                className={`border-solid rounded-full border-8 ${categories === 'vegetable' ? 'border-pink-400' : 'border-gray-100'}`} 
                src={vegetable} 
                alt="" 
            />
            <span className="font-quicksand font-bold text-[32px] leading-[40px] text-[#000000]">
                Rau củ
            </span>
        </div>
    </div>
  )
}

export default Category
