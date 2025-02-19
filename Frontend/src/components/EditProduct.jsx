import { useState } from 'react';
import confirmEdit from '../assets/icons/adjustPriceIconGreen.png'
import exitIcon from '../assets/icons/close_cartitem.png'
import checkIcon from '../assets/icons/visibleCheckIcon.png'
import Input, { TextAreaInput } from '../components/Input'

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Định dạng ngày với 2 chữ số
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Định dạng tháng với 2 chữ số
    const year = date.getFullYear(); // Lấy năm
    return `${day}/${month}/${year}`;
};

const product = {
    productName: {
        title: 'Tên sản phẩm',
        id: 'productName',
        content: 'Cà rốt vị dâu tây',
    },
    buyPrice: {
        title: 'Giá mua vào',
        id: 'buyPrice',
        content: '10000',
    },
    sellPrice: {
        title: 'Giá bán ra',
        id: 'sellPrice',
        content: '15000',
    },
    linkImage: {
        title: 'Đường dẫn hình ảnh',
        id: 'linkImage',
        content: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg',
    },
    importAmount: {
        title: 'Số lượng nhập',
        id: 'importAmount',
        content: '1006',
    },
    buyAmount: {
        title: 'Số lượng bán',
        id: 'buyAmount',
        content: '500',
    },
    harvestDay: {
        title: 'Ngày thu hoạch',
        id: 'harvestDay',
        content: formatDate(new Date(2025, 1, 19)),
    },
    packageUnit: {
        title: 'Đơn vị đóng gói (/1 túi)',
        id: 'packageUnit',
        content: '1',
    },
    nutritionalValue: {
        title: 'Giá trị dinh dưỡng (kcal)',
        id: 'nutritionalValue',
        content: '200',
    },
    description: {
        title: 'Mô tả',
        id: 'description',
        content: 'Dưa hấu nhưng được lai',
    },
    numberOfReviews: {
        title: 'Số lượng đánh giá',
        id: 'numberOfReviews',
        content: '100',
    },
    averageReview: {
        title: 'Đánh giá trung bình',
        id: 'averageReview',
        content: '4.1',
    }
}


const EditProduct = () => {

    const [checked, setChecked] = useState(false)
    const handleCheckboxClick = () => {
        const productImage = document.getElementById('productImage');  
        const checkboxCell = document.getElementById('checkVisible');
        const labelImage = document.getElementById('imageLabelEdit');
        if (!checked) {
            productImage.classList.remove('hidden');
            checkboxCell.setAttribute('checked', 'true');
            // labelImage.classList.remove('bg-[#C1C1C1]').add('bg-[#C4FFB8]')
        } else {
            productImage.classList.add('hidden');
            checkboxCell.setAttribute('checked', 'false');
            // labelImage.classList.remove('bg-[#C4FFB8]').add('bg-[#C1C1C1]')
        }
        setChecked(!checked);
    }
    const closeEditForm = () => {
        console.log('close')
    }
    const handleFileChange = () => {
        console.log('handle file change');
    }
  return (
    <div className="w-[50%] h-[85%] bg-[#C4FFB8] rounded-[40px]">
        <form action="post" className='flex'>
            <div className='flex flex-col pl-10 pt-6 pr-4 gap-4 w-1/2'>
                <div className='flex items-center justify-center'>
                    <input type='file' name='imageEdit' id='imageEdit' accept='image/*' className='hidden' onChange={handleFileChange} />
                    <label
                        className='font-quicksand font-normal text-[20px] leading-[28px] text-center underline text-black w-[400px] h-[200px] justify-center flex items-center  bg-[#C1C1C1] rounded-[20px] cursor-pointer'
                        htmlFor='imageEdit' id='imageLabelEdit'
                    >
                        {checked && product.linkImage.content ? (
                        <img
                            src={product.linkImage.content}
                            className='w-full h-full object-cover rounded-[20px]'
                            alt='Image preview'
                        />
                        ) : 'Choose a file'}
                    </label>
                </div>
                <Input prop={product.linkImage} />
                <Input prop={product.harvestDay} />
                <Input prop={product.importAmount} />
                <Input prop={product.buyAmount} />
                <Input prop={product.nutritionalValue} />
                <div className='relative flex items-center justify-start gap-6 pt-2 pl-2'>
                    <img src={checkIcon} id="productImage" className='pointer-events-none absolute top-3 left-3 hidden w-10 h-10 cursor-pointer' alt="" />
                    <input
                        id='checkVisible'
                        type="checkbox" 
                        onChange={handleCheckboxClick}
                        className="appearance-none w-11 h-11 bg-white border border-solid border-[#8EB486] rounded-[10px] checked:border-blue-500 checked:ring-2 checked:ring-blue-500"
                    />
                    <span className="w-[209px] h-[30px] font-quicksand font-bold text-[20px] leading-[28px] text-[#000000]">
                        Hiển thị sản phẩm
                    </span>

                </div>
            </div>
            <div className='flex flex-col pl-4 pt-6 pr-10 gap-4 w-1/2'>
                <Input prop={product.productName} />
                <Input prop={product.packageUnit} />
                <Input prop={product.buyPrice} />
                <Input prop={product.sellPrice} />
                <Input prop={product.averageReview} />                        
                <Input prop={product.numberOfReviews} />
                <Input prop={product.description} />
                <div className='flex justify-end pt-10 gap-2'>
                    <button onClick={closeEditForm} className='p-2 bg-[#C4FFB8] flex justify-between items-center h-12 border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer'>
                        <span className='font-quicksand font-bold text-[18px] leading-[22px] text-center text-[#000000]'>Thoát</span>
                        <img className='hidden 2xl:block w-10 h-10 p-1' src={exitIcon} alt="" />
                    </button>
                    <button type='submit' className='bg-[#C4FFB8] p-2 flex justify-between items-center  h-12 border-solid border-[2.2px] border-[#8EB486] rounded-[40px] box-border cursor-pointer'>
                        <span className='font-quicksand font-bold text-[18px] leading-[22px] text-center text-[#000000]'>Xác nhận chỉnh sửa</span>
                        <img className='hidden 2xl:block w-10 h-10 p-1' src={confirmEdit} alt="" />
                    </button>
                </div>
            </div>
            
        </form>
    </div>
            
  )
}

export default EditProduct
