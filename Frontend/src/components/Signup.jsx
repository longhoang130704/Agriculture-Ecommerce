import close_icon from '../assets/icons/subtract_login.png'
import arrowRight_icon from '../assets/icons/arrow-right_login.png'
import logo from '../assets/images/logo.png'

const Signup = () => {
  return (
    <div className="flex items-center justify-center flex-col w-[600px] h-[680px] bg-[#8EB486] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[44px]">
        <div className='relative w-full flex items-center justify-center'>
            <img className="absolute left-6 top-4 w-[48px] h-[48px] cursor-pointer" src={close_icon} alt="" />
            <img className="w-[200px] h-[200px]" src={logo} alt="" />
        </div>
        <form className='flex flex-col items-center justify-center w-[90%] gap-5' action="post">
            <input className="w-full h-[75px] pl-6 py-2 font-jost text-[30px] leading-[43px] font-normal bg-[#8EB486] border-[3px] border-white border-solid rounded-full box-border text-white placeholder:text-white" type="text" placeholder='Phone' />
            <input className="w-full h-[75px] pl-6 py-2 font-jost text-[30px] leading-[43px] font-normal bg-[#8EB486] border-[3px] border-white border-solid rounded-full box-border text-white placeholder:text-white" type="password" placeholder='Password'/>
            <input className="w-full h-[75px] pl-6 py-2 font-jost text-[30px] leading-[43px] font-normal bg-[#8EB486] border-[3px] border-white border-solid rounded-full box-border text-white placeholder:text-white" type="password" placeholder='Enter password again'/>
            <div className='w-full flex items-center justify-center pt-7 gap-6'>
                <button className="w-[58%] border-[3px] bg-transparent border-[#FFFFFF] rounded-full box-border py-[11px]">
                    <span className='font-jost text-[31px] leading-[40px] font-normal text-white'>
                        I have an account
                    </span>
                </button>
                <button className="relative w-[42%] py-[11px] flex items-center justify-start bg-[#0FFFC3] border-[3px] border-[#FFFFFF] rounded-full box-border">
                    <span className='pl-3 font-jost text-[30px] leading-[40px] font-normal text-white'>Sign up</span>
                    <div className='h-12 w-12 flex items-center justify-center absolute right-2 bg-white rounded-full'>
                        <img className='' src={arrowRight_icon} alt="" />
                    </div>
                </button>
            </div>
        </form>
        <div className='w-[78%] flex items-center text-center pt-5 pb-6'>
            <p className="font-inter text-[16px] leading-[24px] font-normal text-center text-[#FFF4EE] ">
                By clicking
                <span className='font-inter font-bold'> Log in </span> or <span className='font-inter font-bold'> Sign Up </span>, you agree to our <span className='font-inter underline cursor-pointer'>Terms of use</span> and <span className='font-inter underline cursor-pointer'>Privacy Policy</span>
            </p>
        </div>

    </div>
  )
}

export default Signup
