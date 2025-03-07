import { useState } from 'react';
import confirmEdit from '../assets/icons/adjustPriceIconGreen.png'
import exitIcon from '../assets/icons/close_cartitem.png'
import checkIcon from '../assets/icons/visibleCheckIcon.png'
import Input, { TextAreaInput } from '../components/Input'


const EditProduct = (prop) => {
    const product = prop.currentProduct
    const [checked, setChecked] = useState(true)

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
    const closeEditForm = (event) => {
        event.preventDefault()
        prop.setEditTable(false)
        console.log('close')
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        prop.setEditTable(false)
        let formData = new FormData(event.target);
        console.log('-----------------EditFormData-------------------------');

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        console.log('------------------------------------------');

        
    }
    const handleFileChange = () => {
        console.log('handle file change');
    }
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[60%] h-[80%] bg-[#C4FFB8] rounded-[40px]">
        <form action="post" onSubmit={handleSubmit} className='flex'>
            <div className='flex flex-col pl-10 pt-6 pr-4 gap-8 w-1/2'>
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
                    <img src={checkIcon} id="productImage" className='pointer-events-none absolute top-3 left-3 w-10 h-10 cursor-pointer' alt="" />
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
            <div className='flex flex-col pl-4 pt-6 pr-10 gap-8 w-1/2'>
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
