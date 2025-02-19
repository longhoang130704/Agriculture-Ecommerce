
const Input = (data) => {
  const field = data.prop
  return (
    <div className="flex flex-col items-start gap-1 w-full pl-1">
      <label htmlFor={field.id} className="w-full h-[24px] font-quicksand font-bold text-[20px] leading-[28px] text-[#000000] flex-none self-stretch flex-grow-0">{field.title}</label>
      <input id={field.id} defaultValue={field.content} required name={field.id} type="text" className="w-full h-[48px] bg-[#C4FFB8]  pl-4 py-1.5 border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[24px] leading-[30px] text-[#000000]"/>
    </div>
  )
}

export const TextAreaInput = (data) => {
  const field = data.prop
    return (
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor={field.id} className="w-full font-quicksand font-bold text-[20px] leading-[28px] text-[#000000] flex-none self-stretch flex-grow-0">{field.title}</label>
          <textarea id={field.id} defaultValue={field.content} required name={field.id} rows={5} type="text" className="w-full resize-none bg-[#C4FFB8] pl-4 py-1.5 border-[4px] border-solid border-[#FFFFFF] rounded-[20px] box-border font-quicksand font-normal text-[24px] leading-[30px] text-[#000000]"/>
        </div>
      )
}

export default Input
