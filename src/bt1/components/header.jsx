import React from "react";
import './header.css'

function Header(){
    return (
        <div>
            <div className="h-[50px] w-full flex justify-center">
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">Home</div>
                <div className="h-[50px] bg-blue-900 p-2 flex justify-center items-center text-white">Shop Page</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">Single product</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">Cart</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">checkout</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">category</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">oder</div>
                <div className="h-[50px] bg-white p-2 flex justify-center items-center">contact</div>
            </div>  
            <div className="h-10 w-full bg-blue-950 justify-center">
                SHOP
            </div>
        </div>
        
    )

}

export default Header;