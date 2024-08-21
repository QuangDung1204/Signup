import React from 'react'
import LaptopIcon from '@mui/icons-material/Laptop';
import AppleIcon from '@mui/icons-material/Apple';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';


function Body() {
  return (
    <div className="flex justify-between mx-auto p-20 h-screen w-full items-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/77/77/ogilfw.jpeg")' }}>
      <div className="h-[550px] w-[250px] bg-white rounded-2xl flex flex-col relative">

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><LaptopIcon /></div>
          <span className='pl-3'>Laptop</span>
          <div className="absolute left-full top-0 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block z-10">
            <h3 className="font-bold">Laptop</h3>
            <div className="">
                <div className="">
                  <div className="grid grid-cols-6 gap-4 pt-2">
                    <div className="col-span-1 text-sky-500 font-bold">Thương hiệu</div>
                    <div className="col-span-1 text-sky-500 font-bold">Nhu cầu</div>
                    <div className="col-span-1 text-sky-500 font-bold">Kích thước</div>
                    <div className="col-span-1 text-sky-500 font-bold">Cấu hình</div>
                    <div className="col-span-1 text-sky-500 font-bold">Mức giá</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Acer</div>
                    <div className='text-base'>Laptop Gaming</div>
                    <div className='text-base'>Dưới 13 inch</div>
                    <div className='text-base'>Laptop i5</div>
                    <div className='text-base'>Dưới 10 triệu</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>ASUS</div>
                    <div className='text-base'>Laptop AI</div>
                    <div className='text-base'>13-15 inch</div>
                    <div className='text-base'>Laptop i7</div>
                    <div className='text-base'>10-15 triệu</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Dell</div>
                    <div className='text-base'>Laptop đồ họa</div>
                    <div className='text-base'>Trên 15 inch</div>
                    <div className='text-base'>Laptop i9</div>
                    <div className='text-base'>15-20 triệu</div>
                    <div ></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>HP</div>
                    <div className='text-base'>Laptop Sinh viên</div>
                    <div className='text-base'>Laptop 13 inch</div>
                    <div className='text-base'>Laptop Ryzen 5</div>
                    <div className='text-base'>20-25 triệu</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Lenovo</div>
                    <div className='text-base'>Laptop Văn Phòng</div>
                    <div className='text-base'>Laptop 14 inch</div>
                    <div className='text-base'>Laptop Ryzen 7</div>
                    <div className='text-base'>25-30 triệu</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>LG Gram</div>
                    <div className='text-base'>Laptop cảm ứng 2 in 1</div>
                    <div className='text-base'>Laptop 15.6 inch</div>
                    <div className='text-base'>Laptop Ultra 5</div>
                    <div className='text-base'>Trên 30 triệu</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>MSI</div>
                    <div className='text-base'>Laptop mỏng nhẹ</div>
                    <div className='text-base'>Laptop 16 inch</div>
                    <div className='text-base'>Laptop Ultra 7</div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Gigabyte</div>
                    <div className='text-base'>Laptop Workstation</div>
                    <div className='text-base'>Laptop 17 inch</div>
                    <div className='text-base'>Laptop Ultra 9</div>
                    <div className='col-span-1 text-sky-500 font-bold'>Laptop cũ</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-10">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='col-span-1 text-sky-500 font-bold'>Gói bảo hành mở rộng</div>
                    <div></div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><AppleIcon /></div>
          <span className='pl-3'>Sản phẩm Apple</span>
          <div className="absolute left-full top-0 transform -translate-y-[10%] mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block z-10">
            <h3 className="font-bold">Sản phẩm Apple</h3>
            <div className="">
                <div className="">
                  <div className="grid grid-cols-6 gap-4 pt-2">
                    <div className="col-span-1 text-sky-500 font-bold">Macbook</div>
                    <div className="col-span-1 text-sky-500 font-bold">Iphone</div>
                    <div className="col-span-1 text-sky-500 font-bold">iPad</div>
                    <div className="col-span-1 text-sky-500 font-bold">Mac PC</div>
                    <div className="col-span-1 text-sky-500 font-bold">Phụ Kiện Apple</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Macbook Air</div>
                    <div className='text-base'>iPhone 14 series</div>
                    <div className='text-base'>iPad Pro</div>
                    <div className='text-base'>iMac</div>
                    <div className='text-base'>Apple Watch</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Macbook Pro</div>
                    <div className='text-base'>iPhone 15 series</div>
                    <div className='text-base'>iPad Air</div>
                    <div className='text-base'>Mac mini</div>
                    <div className='text-base'>Củ sạc & Cáp sạc</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'>iPad Mini</div>
                    <div className='text-base'></div>
                    <div className='text-base'>Tai nghe Apple</div>
                    <div ></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'>iPad Gen Series</div>
                    <div className='text-base'></div>
                    <div className='text-base'>Bàn phím, chuột & bút</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'>Apple TV</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'>Airtag</div>
                    <div></div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><PhonelinkOutlinedIcon /></div>
          <span className='pl-3'>PC-Máy tính bàn</span>
          <div className="absolute left-full top-0 transform -translate-y-[20%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">PC-Máy tính bàn</h3>
            <div className="">
                <div className="">
                  <div className="grid grid-cols-6 gap-4 pt-2">
                    <div className="col-span-1 text-sky-500 font-bold">PC Theo Thương hiệu</div>
                    <div className="col-span-1 text-sky-500 font-bold">PC Theo Nhu cầu</div>
                    <div className="col-span-1 text-sky-500 font-bold">PC Theo Giá Tiền</div>
                    <div className="col-span-1 text-sky-500 font-bold">PC Theo Cấu hình Chip</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Phong Vũ</div>
                    <div className='text-base'>PC AI</div>
                    <div className='text-base'>Dưới 10 Triệu</div>
                    <div className='text-base'>Pentium/Celeron</div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Acer</div>
                    <div className='text-base'>PC Gaming</div>
                    <div className='text-base'>10-15 Triệu</div>
                    <div className='text-base'>Core i3</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Apple</div>
                    <div className='text-base'>PC Văn Phòng</div>
                    <div className='text-base'>15-20 Triệu</div>
                    <div className='text-base'>Core i5</div>
                    <div ></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Asus</div>
                    <div className='text-base'>PC Đồ Họa</div>
                    <div className='text-base'>Trên 20 Triệu</div>
                    <div className='text-base'>Core i7</div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Dell</div>
                    <div className='text-base'>PC All-in-One</div>
                    <div className='text-base'></div>
                    <div className='text-base'>Ryzen </div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>HP</div>
                    <div className='text-base'>PC Mini</div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Lenovo</div>
                    <div className='text-base'>Build PC</div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-6 gap-4 pt-1">
                    <div className='text-base'>Intel</div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div className='text-base'></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><DesktopWindowsIcon /></div>
          <span className='pl-3'>Màn hình máy tính</span>
          <div className="absolute left-full top-0 transform -translate-y-[30%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Màn hình máy tính</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><DeveloperBoardOutlinedIcon /></div>
          <span className='pl-3'>Linh kiện máy tính</span>
          <div className="absolute left-full top-0 transform -translate-y-[40%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Linh kiện máy tính</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><LanOutlinedIcon /></div>
          <span className='pl-3'>Phụ kiện máy tính</span>
          <div className="absolute left-full top-0 transform -translate-y-[50%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Phụ kiện máy tính</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><SportsEsportsOutlinedIcon /></div>
          <span className='pl-3'>Gaming-Gear</span>
          <div className="absolute left-full top-0 transform -translate-y-[60%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Gaming-Gear</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><PhoneAndroidOutlinedIcon /></div>
          <span className='pl-3'>Điện thoại & Phụ kiện</span>
          <div className="absolute left-full top-0 transform -translate-y-[70%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Điện thoại & Phụ kiện</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><HeadsetOutlinedIcon /></div>
          <span className='pl-3'>Thiết bị âm thanh</span>
          <div className="absolute left-full top-0 transform -translate-y-[80%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Thiết bị âm thanh</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>

        <div className="group flex-1 flex items-center pl-[10px] hover:bg-gray-100 cursor-pointer relative">
          <div className=""><DevicesOtherOutlinedIcon /></div>
          <span className='pl-3'>Xây dựng cấu hình</span>
          <div className="absolute left-full top-0 transform -translate-y-[90%] z-10 mt-0 ml-2 w-[1100px] h-[550px] bg-white p-4 rounded-lg shadow-lg hidden group-hover:block">
            <h3 className="font-bold">Xây dựng cấu hình</h3>
            <p>Chi tiết về PC và máy tính bàn...</p>
          </div>
        </div>
      </div>

      <div className="">
        <img className='w-[750px] h-[450px]' src="https://storage-asset.msi.com/global/picture/wallpaper/wallpaper_16723814515fd5a62ca077e681197153b24ad8f91e.jpeg" alt="" />
      </div>

      <div className="">
        <img className='cursor-pointer' src="https://lh3.googleusercontent.com/TeQ7m8oukkfeKFo5xsuvxj2G0NOsv-GUvkOMMl50wAEsflAKILKAJIrvO7AAnfsAJaRgspCw3nD-E_4q-OQIIU5AThYfNkvXng=w308-rw" alt="" />
        <img className='pt-7 cursor-pointer' src="https://lh3.googleusercontent.com/wDoU6aMjIcL4zrLcJ1WiGFId5Cl4PCHV4CYw42Dit4DEyVgpGeEv0rVSZws55cEaiGmMnaQvb_7dCrYe4ZQTesBxBYbbFELt_g=w308-rw" alt="" />
        <img className='pt-7 cursor-pointer' src="https://lh3.googleusercontent.com/F9G66FwNb3MAkEWZg-V7a1zJgyE2LgpeCGg0w_yHtAjNgswed25mQ9Uwh20qUOoqsW4gPfCkzpFy6RBJQLg4lpndIaZPT0SI=w308-rw" alt="" />
      </div>
    </div>
  )
}

export default Body
