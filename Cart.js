import { useState } from "react";


const Cart=()=>{

    const[cart,setCart]=useState(0);



    return(
        <>
        <div className="flex relative">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 m-4 p-3 h-auto w-2/4 shadow">
                <div className="col-span-1">
                    <div className="flex justify-center">
                     <img src="" alt="" height={130} width={130} className="p-2 border border-gray-500 m-4"/>
                    </div>
                    <div className="flex justify-center">
                    <div className="flex font-sans font-medium mt-1 m-4 p-1 justify-between w-32">
                     <button className="rounded-full w-8 h-8  border border-gray-500">-</button>
                     <p className="border border-gray-500 px-4 py-0.5">2</p>
                     <button className="rounded-full w-8 h-8 border border-gray-500">+</button>
                    </div>
                    </div>
                </div>
              <div className="m-3 mt-4 font-sans font-medium col-span-2">
              <h1 className="text-md">Rich Club Retro Sqaure Sunglasses</h1>
              <h1 className="text-md text-slate-500">For Men & Women, Black</h1>
              <br/>
              <br/>
              <h1 className="text-xl font-medium font-sans"><del className="text-gray-500 text-sm">₹500</del> ₹399</h1>
              </div>
            </div>
            
            

            
            
          
        
       
    
          <div className="w-1/4 m-4 border divide-y">
            <div>
              <h1 className="font-medium text-slate-600 text-md m-3">PRICE DETAILS</h1>
            </div>
            <div>
              <div className="flex justify-between font-medium text-md text-gray-800 p-2.5">
                <p>Price</p>
                <p>₹230</p>
              </div>
              <div className="flex justify-between font-medium text-md text-gray-800 p-2.5">
                <p>Discount</p>
                <p>-<span className="text-green-600">₹30</span></p>
              </div>
              <div className="flex justify-between font-medium text-md text-gray-800 p-2.5">
                <p>Delivery Charges</p>
                <p><del>₹50</del><span className="text-green-600"> Free</span></p>
              </div>
            </div>
            <div>
              <div className="h-10 flex justify-between font-medium text-xl text-gray-800 p-2">
                <h1>Total Amount</h1><p>₹200</p>
              </div>
            </div>
            
          </div>
          
        </div>

       
        </>
    );
}
export default Cart;