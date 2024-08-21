import React from 'react'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ArticleIcon from '@mui/icons-material/Article';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

function Tashbar() {
  return (
    <div>
        <div className="w-full h-[35px] flex justify-end bg-blue-700 text-white pt-1">
          <div className="flex pr-11">
            <div className="size-7"><LoyaltyIcon/></div>
            <div className="">Khuyến mại</div>
          </div>
          <div className="flex pr-11">
            <div className="size-7"><ArticleIcon/></div>
            <div className="">Tin công nghệ</div>
          </div>
          <div className="flex pr-11">
            <div className="size-7"><HomeRepairServiceIcon/></div>
            <div>Tư vấn</div>
          </div>
          <div className="flex pr-11">
            <div className="size-7"><HeadsetMicIcon/></div>
            <div className="">Hotline: 0865274818</div>
          </div>
          <div className="flex pr-20">
            <div className="size-7"><AccountCircleIcon/></div>
            <div className="">Đăng nhập</div>
          </div>
        </div>
    </div>
  )
}

export default Tashbar
