import { useState, useEffect } from "react";
const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://api.escuelajs.co/api/v1/categories")
          .then((data) => data.json())
          .then((data) => setCategories(data));
        
      } catch (error) {
        console.error("Error while fetching category data:", error);
      }
    };

    fetchData();
  }, []);

  return categories ? (
    <>
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mx-10">
      {categories.slice(0,4).map((category) => (
        <>
          <div className="col-span-1 p-3 flex mt-3 justify-center border pb-12 h-80 w-auto border-gray-200 rounded m-auto relative">
            <img 
              // src={"data:image/jpeg;base64" + category.image}
              src={category.image}
              height={150}
              width={230}
            />
            <h3 className="absolute py-2 bottom-0 font-bold text-xl">{category.name}</h3>
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
export default Categories;
