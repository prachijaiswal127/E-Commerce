
import { IoIosArrowDropleftCircle ,IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";
const Carousel =({slides})=>
{
    const[current,setCurrent]=useState(0);

    const previous=()=>{
        if(current===0) setCurrent(slides.length-1);
        else setCurrent(current-1)
    }
    const next=()=>{
        if(current===slides.length-1) setCurrent(0);
        else setCurrent(current+1)
    }
    
    return(
       <>
        <div className="overflow-hidden relative">
        
        <div className={`flex transition ease-out duration-40`}
        style={{transform:`translateX(-${current*100}%)`,}}>
            {slides.map((s)=>{
               return <img src={s} alt="..."/>;
            })}
        </div>
       
        <div className="absolute h-full top-0 w-full justify-between flex text-white text-4xl px-4">
            <button onClick={previous}>
                <IoIosArrowDropleftCircle />
            </button>
            <button onClick={next}>
                <IoIosArrowDroprightCircle />
            </button>
        </div>

        <div className="absolute bottom-0 py-3 flex justify-center gap-3 w-full">
         {slides.map((s,i)=>
         {
            return(
                <div onClick={()=>{setCurrent(i);}} key={"circle"+i} className={`rounded-full w-3 h-3  ${i===current ? "bg-white" : "bg-gray-300"}`}>
                </div>
            );
         }
         )}

        </div>
        </div>

        
        </>
    );
}
export default Carousel;