import { useState } from "react";
import { ShortChartItem } from "./ChartItem"
import './webkit.css'

import DiscountPopup from "./DiscountPopup"
import BonusPopup from './BonusPopup';
import ExpiredPopup from './ExpiredPopup';

const ProposeItem = (prop) => {

    let propose = {};
    if (prop.type === 'offer') {
        propose.title = 'Đề xuất giảm giá';
        propose.type = 'offer';
        propose.color = '#C4FFB8';
        propose.description = 'Nhận thấy trong tháng này, những sản phẩm sau có doanh thu thấp, chúng tôi đề xuất bạn có những chương trình giảm giá để thúc đẩy doanh thu.';
        propose.items = prop.items
    } else if (prop.type === 'bonus') {
        propose.title = 'Đề xuất sản phẩm tặng kèm';
        propose.type = 'bonus';
        propose.color = '#B8CFFF';
        propose.description = 'Nhận thấy trong tháng này, những sản phẩm sau có doanh thu thấp, và gần hết hạn sử dụng, chúng tôi đề xuất bạn sử dụng các sản phẩm sau cho chương trình tặng kèm.';
        propose.items = prop.items
    } else if (prop.type === 'expired') {
        propose.title = 'Đã loại bỏ sản phẩm khỏi hệ thống';
        propose.type = 'expired';
        propose.color = '#FFEAB8';
        propose.description = 'Những sản phẩm sau đã bị loại bỏ khỏi hệ thống do quá hạn sử dụng, không còn an toàn cho sức khỏe của người dùng, chi tiết lý do loại bỏ xem ở từng sản phẩm.';
        propose.items = prop.items
    } else alert('Error type of propose')


    const [currentItem, setCurrentItem] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    const clickItem = (item) => {        
        setCurrentItem(item)
        setShowPopup(true)
    }
    

  return (
    <div className={`flex flex-col items-start justify-start pl-8 pr-12 pt-10 gap-6 bg-[${propose.color}] rounded-[30px] w-[90%] h-[400px]`}>
        <span className="font-quicksand font-bold text-[32px] leading-[40px] text-[#000000]">{propose.title}</span>
        <p className="font-quicksand font-normal text-[32px] leading-[40px] text-[#000000]">{propose.description}</p>
        <div className={`w-full flex pb-4 gap-2 pt-16 overflow-x-scroll overflow-ellipsis whitespace-nowrap custom-scrollbar`}>
            {
                   propose.items.map((item, index) => {
                    return (
                        <ShortChartItem key={index} item={item} onClick={() => clickItem(item)}  />
                    )
                })
            }
            {
                showPopup && (
                    propose.type === 'offer' ? <DiscountPopup item={currentItem} setShowPopup={setShowPopup}/> : (
                    propose.type === 'bonus' ? <BonusPopup item={currentItem} setShowPopup={setShowPopup}/> :
                                                  <ExpiredPopup item={currentItem} setShowPopup={setShowPopup}/> )
                )
            }
            
        </div>


    </div>

  )
}

export default ProposeItem
