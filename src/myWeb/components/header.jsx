import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
function HeaderWeb() {
    return (
        <div>
            <nav className="bg-white ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/453905769_1627967981395959_2570081000420369037_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sMSnqHTtn6UQ7kNvgG9bmjY&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYDbdrz4Khs1d4MBPcq4B5CIQZ4uTnjTYW5Fdb4w85l_Ig&oe=66C3C4FE" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap  text-black">Quang Dũng</span>
                    </a>


                    <div className="w-[550px] h-[40px] bg-gray-200 flex rounded-xl">
                        <div className="text-slate-400 pt-2 tetx-xs w-full">Nhập sản phẩm bạn muốn tìm.</div>
                        <div className="pt-1 pl-20"><SearchIcon/></div>
                    </div>
                    

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <div className="flex">
                                <div className="size-7"><DevicesIcon/></div>
                               <div className="block text-xl  text-black">
                                    Cấu hình PC
                                </div> 
                            </div>
                            
                            <div className="">
                                <NotificationsIcon/>
                            </div>
                            <div className="flex">
                                <div className=""><ShoppingCartIcon/></div>
                                <div className="text-xl">Giỏ hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HeaderWeb
