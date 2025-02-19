import { useState } from 'react';
import confirmAdd from '../assets/icons/adjustPriceIconGreen.png'
import checkIcon from '../assets/icons/visibleCheckIcon.png'
import Input, { TextAreaInput } from '../components/Input'

const info = {
    supplierName: 'Khoa-chan co.'
}

const product = {
    productName: {
        title: 'Tên sản phẩm',
        id: 'productName'
    },
    buyPrice: {
        title: 'Giá mua vào',
        id: 'buyPrice'
    },
    sellPrice: {
        title: 'Giá bán ra',
        id: 'sellPrice'
    },
    linkImage: {
        title: 'Đường dẫn hình ảnh',
        id: 'linkImage'
    },
    amount: {
        title: 'Số lượng',
        id: 'amount'
    },
    harvestDay: {
        title: 'Ngày thu hoạch',
        id: 'harvestDay'
    },
    packageUnit: {
        title: 'Đơn vị đóng gói (/1 túi)',
        id: 'packageUnit'
    },
    nutritionalValue: {
        title: 'Giá trị dinh dưỡng (kcal)',
        id: 'nutritionalValue'
    },
    description: {
        title: 'Mô tả',
        id: 'description'
    },
    numberOfReviews: {
        title: 'Tổng số đánh giá',
        id: 'numberOfReviews'
    },
    averageReview: {
        title: 'Đánh giá trung bình',
        id: 'averageReview'
    }
}


const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
const day = today.getDate().toString().padStart(2, '0'); 
const formattedDate = `${year}:${month}:${day}`;




const AddProduct = () => {
    const [checked, setChecked] = useState(false)
    const handleCheckboxClick = () => {
        console.log(1);
        
        const productImage = document.getElementById('productImage');  
        const checkboxCell = document.getElementById('checkVisible');  
        if (!checked) {
            productImage.classList.remove('hidden');
            checkboxCell.setAttribute('checked', 'true');
        } else {
            productImage.classList.add('hidden');
            checkboxCell.setAttribute('checked', 'false');
        }
        setChecked(!checked);
    }
    const handleFileChange = () => {

    }
  return (
    <div className="relative flex flex-col w-[1428px] h-[900px] bg-[#FFF4EE] gap-6 pt-6">
        <span className="font-quicksand font-bold text-[36px] leading-[45px] text-center text-[#000000]">
            THÊM SẢN PHẨM
        </span>
        <div className="w-full h-[90%] flex justify-center items-start gap-6 px-4">
            <div className="w-[65%] h-[90%] bg-[#C4FFB8] rounded-[40px]">
                <form action="" className='flex'>
                    <div className='flex flex-col pl-6 pt-6 pr-4 gap-3 w-1/2'>
                        <input type='file' name='imageAdd' id='imageAdd' accept='image/*' className='hidden' onChange={handleFileChange} />
                        <label
                            className='font-quicksand font-normal text-[20px] leading-[28px] text-center underline text-black w-[400px] h-[200px] justify-center flex items-center  bg-[#D9D9D9] rounded-[20px] cursor-pointer'
                            htmlFor='imageAdd' id='imageLabelAdd'
                        >
                            Choose a file
                        </label>
                        <Input prop={product.linkImage} />
                        <Input prop={product.amount} />
                        <Input prop={product.harvestDay} />
                        <Input prop={product.packageUnit} />
                        <Input prop={product.nutritionalValue} />
                    </div>
                    <div className='flex flex-col pl-4 pt-6 pr-6 gap-3 w-1/2'>
                        <Input prop={product.productName} />
                        <Input prop={product.buyPrice} />
                        <Input prop={product.sellPrice} />
                        <Input prop={product.numberOfReviews} />
                        <Input prop={product.averageReview} />                        
                        <TextAreaInput prop={product.description} />
                    </div>
                    




                    <button type='submit' className='bg-[#FFF4EE] absolute bottom-12 right-10 flex justify-center items-center gap-1 h-[56px] border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer'>
                        <span className='font-quicksand font-bold pl-3 text-[20px] leading-[25px] text-center text-[#000000]'>Xác nhận thêm</span>
                        <img className='w-[34px] h-[34px] p-1' src={confirmAdd} alt="" />
                    </button>
                </form>
                
            </div>
            <div className="flex flex-col gap-16 pt-8 w-[30%] h-[75%] bg-[#0FFFC3] rounded-[40px]">
                <div className='flex flex-col pl-7 gap-0.5'>
                    <span className="text-left font-quicksand font-bold text-[24px] leading-[30px] text-[#2F2F2F]">
                        Nhà cung cấp
                    </span>
                    <span className="w-[356px] h-[38px] font-quicksand font-normal text-[20px] leading-[25px] text-[#2F2F2F]">
                        {info.supplierName} (bạn)
                    </span>
                </div>
                <div className='flex flex-col pl-7 gap-2'>
                    <span className="font-quicksand font-bold text-[24px] leading-[30px] text-[#2F2F2F]">
                        Thời gian thêm sản phẩm
                    </span>

                    <span className="w-[356px] h-[38px] font-quicksand font-normal text-[20px] leading-[25px] text-[#2F2F2F]">
                        {formattedDate} GMT+7
                    </span>
                </div>
                <div className='relative flex items-center justify-start gap-6 pl-6'>
                    <img src={checkIcon} id="productImage" className='pointer-events-none absolute top-1.5 left-7 hidden w-10 h-10 cursor-pointer' alt="" />
                    <input
                        id='checkVisible'
                        type="checkbox" 
                        onChange={handleCheckboxClick}
                        className="appearance-none w-[47px] h-[47px] bg-white border border-solid border-[#8EB486] rounded-[10px] checked:border-blue-500 checked:ring-2 checked:ring-blue-500"
                    />
                    <span className="w-[209px] h-[30px] font-quicksand font-bold text-[24px] leading-[30px] text-[#000000]">
                        Hiển thị sản phẩm
                    </span>

                </div>
            </div>
        </div>
        

    </div>
  )
}

export default AddProduct
