import Carousel from "./Carousel";
import Categories from "./Categories";
import Products from "./Products";

const Home = () => {
  let slides = [
    "https://www.evanik.com/wp-content/uploads/2022/03/blog-2-1.png",
    "https://nairametrics.com/wp-content/uploads/2021/12/IMG_16122021_092538_900_x_530_pixel.jpg",
    "https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg",
    "https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_E-Commerce_Website_.jpeg.jpg",
  ];
  return (
    <>
      <div className="w-2/4 m-auto">
        <Carousel slides={slides} />
      </div>
      <div className="w-full">
        <h1 className="text-3xl mx-16 p-2 text-white bg-yellow-300 font-semibold my-5">
          CATEGORIES...
        </h1>
        <Categories />
        <h1 className="text-3xl mx-16 p-2 text-white bg-yellow-300 font-semibold my-5">
          PRODUCTS...
        </h1>
        <Products />
      </div>
    </>
  );
};
export default Home;
