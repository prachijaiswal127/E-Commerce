import { useEffect, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import Cart from './Cart';
const Products =()=>{
     
    const[products,setProducts]=useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            fetch("https://api.escuelajs.co/api/v1/products")
              .then((data) => data.json())
              .then((data) => setProducts(data));
            
          } catch (error) {
            console.error("Error while fetching product data:", error);
          }
        };
    
        fetchData();
      }, []);
      return products ? (
        <>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mx-10">
          {products.slice(0,36).map((product) => (
            <>
              <div className="col-span-1 p-3 flex mt-3 justify-center border h-auto w-auto border-gray-200 rounded mx-8 relative">
                <img 
                  // src={"data:image/jpeg;base64" + product.image}
                  src={product.images}
                  width={230}
                  alt="..."
                  className="pb-12"
                />
                <h3 className="absolute bottom-0 left-0 font-bold m-4">{product.title}</h3>
                <h2 className="absolute bottom-0 left-4 font-bold">{product.price}/-</h2>
                <button onClick={""} className="absolute bottom-1.5 right-3 text-white text-xl bg-yellow-400 px-2 py-1"><BsCartPlusFill /></button>
              </div>
            </>
          ))}
        </div>
        </>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-solid"></div>
        </div>
      );
    };
    export default Products;















    // <input type="text" placeholder="Enter Mobile Number" className="rounded w-full mb-4 px-3 py-1.5 focus:border-slate-300 outline-none"/>
    //             <div>Send OTP</div>