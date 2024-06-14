import React from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MopedIcon from '@mui/icons-material/Moped';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function Headers() {
  return (
    <div className='w-full h-[103px] text-center'>
      <div className='w-full h-[40px] bg-[#e9efff] flex justify-around	items-center text-[#000b68]'>
        <div className='flex pl-20 cursor-pointer'>
          <div className='pt-0.5'><CompareArrowsIcon/></div>
          <div className='font-bold	text-lg pt-1 pl-1'>Thu cũ</div>
          <div className='text-xs	pl-1	pt-3'>Giá ngon</div>
          <div className='font-bold	text-lg	pt-1 pl-1'>- Lên Đời</div>
          <div className='text-xs	pl-1	pt-3'>tiết kiệm</div>
        </div>
        
        <div className='flex cursor-pointer'>
          <div className='pt-0.5'><MopedIcon/></div>
          <div className='font-bold	text-lg	pt-1 pl-1'>Giao Nhanh - Miễn Phí</div>
          <div className='text-xs	pl-1	pt-3'>
            cho đơn từ 300k</div>
        </div>

        <div className='flex cursor-pointer'>
          <div className='pt-0.5'><WorkspacePremiumIcon/></div>
          <div className="text-xs	pl-1	pt-3">Sản phẩm</div>
          <div className="font-bold	text-lg	pt-1 pl-1">Chính Hãng - Xuất VAT</div>
          <div className="text-xs	pl-1	pt-3">đầy đủ</div>
        </div>
      </div>

      <div className='w-full h-[63px] bg-red-700 flex  justify-center	 items-center	 text-white cursor-pointer'>
        <div className="div  cursor-pointer">
          <div className="text-3xl float-right">
            cellphone
          </div>
        </div>
        <div className="w-[96px] h-[41px] bg-[#df3346] 	rounded-lg	flex 	items-center cursor-pointer">
          <div className=''>
            <LibraryBooksIcon/>
          </div>
          <div className="text-xs	pl-1.5">
            Danh mục
          </div>
        </div>
        <div className="w-[130px] h-[41px] mx-3 bg-[#df3346]	rounded-lg	flex 	items-center cursor-pointer">
          <div>
            <LocationOnIcon/>
          </div>
          <div className="text-xs	pl-1.5">
            <div className="">Xem giá tại</div>
            <div className="">Hồ Chí Minh</div>
          </div>
          <div className=""><KeyboardArrowDownIcon/></div>
        </div>
        <div className="w-[300px] h-[35px] bg-white text-[#838383]	rounded-lg flex 	items-center cursor-pointer">
          <div className=""><SearchIcon/></div>
          <div className="pl-1">Bạn Cần Tìm Gì?</div>
          
        </div>
        <div className="mx-3 flex 	items-center cursor-pointer">
          <div className=""><LocalPhoneIcon/></div>
          <div className="text-xs	pl-1.5">
            <div className="">Gọi mua hàng</div>
            <div className="">1800.2097</div>  
          </div>
        </div>
        <div className="flex 	items-center cursor-pointer">
          <div className=""><LocationOnIcon/></div>
          <div className="text-xs	pl-1.5">
            <div className="">Cửa hàng</div>
            <div className="">gần bạn</div>
          </div>
          
        </div>
        <div className="flex 	items-center mx-3 cursor-pointer">
          <div className=""><DirectionsCarIcon/></div>
          <div className="text-xs	pl-1.5">
            <div className="">Tra cứu</div>
            <div className="">đơn hàng</div>
          </div>
        </div>
        <div className="flex 	items-center cursor-pointer">
          <div className=""><ShoppingBagIcon/></div>
          <div className="text-xs	pl-1.5">
            <div className="">Giỏ</div>
            <div className="">hàng</div>
          </div>
        </div>
        <div className=" w-[75px] h-[41px] rounded-lg flex 	items-center mx-3 cursor-pointer bg-[#df3346]">
        <div className="text-xs	pl-1.5">
            <div className="">Đăng nhập</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers
