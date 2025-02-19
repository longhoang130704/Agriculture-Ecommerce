import addIcon from '../assets/icons/addRound.png'

const AddProductButton = () => {
  return (
    <div  className="flex justify-center items-center gap-2 border-solid cursor-pointer box-border w-[250px] h-[90px] bg-[#FFFFFF] border-[2px] border-[#A52223] rounded-[50px]">
        <span className="font-quicksand font-bold text-[20px] leading-[25px] text-center text-[#000000]">
        Thêm sản phẩm
        </span>
        <img src={addIcon} alt="" />
    </div>

  )
}

export default AddProductButton
