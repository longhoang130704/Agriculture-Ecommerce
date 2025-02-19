import detailIcon from '../assets/icons/detail.png'
import deleteIcon from '../assets/icons/delete.png'
import { formatCurrency } from '../lib/utils'
const Item = (prop) => {
  const item = prop.item

  const handleDeleteProduct = () => {
    let confirmDelete = window.confirm('Hết hàng, xóa hả?')
    if(confirmDelete) {
      alert('Không cho xóa...')
    } else {
      console.log('Delete product cancelled')
    }
  }
  const handleEditProduct = () => {
    prop.setCurrentProduct(item)
    prop.setEditTable(true)
    console.log('Edit product')
  }

  return (
    <>    
      <div className='w-[280px] h-[390px] box-border flex flex-col justify-between items-center px-4 py-3.5  relative bg-white border-[2.2px] border-solid border-[#997C70] shadow-[5px_4px_4px_#8EB486] rounded-[40px]'>
        <img className='opacity-40 w-[100%] max-h-[45%] rounded-[22px]  flex-none flex-grow-0' src={item.linkImage.content} alt="" />
        <span className='font-quicksand font-bold text-[32px] leading-[44px] text-center text-[#C4C4C4] flex-none flex-grow-0 overflow-hidden whitespace-nowrap text-ellipsis w-full'>{item.productName.content}</span>
        <span className='font-quicksand font-normal text-[20px] leading-[24px] text-center text-[#C4C4C4]'>Kho: {item.importAmount.content}</span>
        <span className='font-normal text-[24px] leading-[36px] text-center text-[#C4C4C4] flex-none flex-grow-0'>{formatCurrency(item.sellPrice.content)} VND</span>
        <div className='w-[90%] box-border flex justify-center items-center gap-2 py-2 '>
          <div onClick={handleEditProduct} className='flex justify-center items-center w-[58%] bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer'> {/* cursor-pointer is here ?*/}
            <span className='flex justify-center items-center h-[100%] w-[70%] pl-2 font-quicksand font-bold text-[20px] leading-[28px] text-center text-black'>Chi tiết</span>
            <img className='w-[36px] h-[36px] p-1' src={detailIcon} alt="" />
          </div>
          <div onClick={handleDeleteProduct} className='flex justify-center items-center w-[40%] bg-white border-[2.2px] border-[#8EB486] border-solid rounded-[50px] box-border cursor-pointer'> {/* cursor-pointer is here ?*/}
            <span className='flex justify-center items-center h-[100%] w-[70%] pl-2 font-quicksand font-bold text-[20px] leading-[28px] text-center text-black'>Xoá</span>
            <img className='w-[36px] h-[36px] p-1' src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
