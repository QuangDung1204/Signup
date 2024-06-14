import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import CampaignIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Banner() {
  return (
    <div className='w-full flex justify-center	items-center my-1.5	'>
      <div className="w-[224px] h[378px]  bg-white text-black border-double">
        <div className="text-base	mt-1"><PhoneIphoneIcon/> Điện thoại, Tablet 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><LaptopIcon/> Laptop <ArrowForwardIosIcon/>
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><HeadphonesIcon/> Âm thanh 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><WatchIcon/> Đồng hồ, Camera 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><BroadcastOnHomeIcon/> Gia Dụng, SmartPhone 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><SettingsInputHdmiIcon/> Phụ kiện 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><PhonelinkIcon/> PC, Màn hình, Máy in 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><DesktopWindowsIcon/> Tivi 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><ScreenRotationIcon/> Thu cũ đổi mới 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><ScreenRotationAltIcon/> Hàng cũ 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><CampaignIcon/> Khuyến mãi 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
        <div className="text-base	mt-1"><NewspaperIcon/> Tin công nghệ 
          <div className="float-right	"><ArrowForwardIosIcon/>
          </div>
        </div>
      </div>
      <div className="w-[676px] h-[380px]">
        <div className="">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/iphone-15-pro-max-nang-cap-camera.jpg" alt="" />
        </div>
        <div className="flex justify-center iteams-center ">
          <div className="w-[137px] h-[83px] m-auto	 text-xs p-4">
            <div className="">MỪNG KHAI TRƯƠNG</div>
            <div className="">ưu đãi hấp dẫn</div>
          </div>
          <div className="w-[137px] h-[83px] m-auto	 text-xs p-4">
            <div className="">IPHONE 15 PROMAX nâng cấo ngay</div>
          </div>
          <div className="w-[137px] h-[83px] m-auto	 text-xs p-4">
            <div className="">GALAXY S24 ULTRA giá tốt chốt ngay</div>
          </div>
          <div className="w-[137px] h-[83px] m-auto	 text-xs p-4">
            <div className="">IPAD PRO M4 ưu đãi giá tốt mua ngay</div>
          </div>
          <div className="w-[137px] h-[83px] m-auto	 text-xs p-4">
            <div className="">REDMI PAD PRO giá ưu đãi mua ngay</div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[260px] h-[115px] mb-3">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/690x300_Rightbanner_Galaxy-M34-5G_04%20(2).png" alt="" />
        </div>
        <div className="w-[260px] h-[115px] mb-3">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/student-right-banner-7-6-2024.png" alt="" />
        </div>
        <div className="w-[260px] h-[115px] ">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/s-student-banner-block-home-update%20(2).jpg" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Banner
