import ReviewSwiper from "./ReviewSwiper";
import Footer from "./Footer";
const Review = () => {
  return (
    <div>
      <section
        id="Review"
        className="w-full h-[auto] bg-white dark:bg-[black] "
      >
        <div className="flex flex-col items-center pt-[10px]">
          <span className="text-[20px] font-bold text-orange-500  animate-slideleft2">
            Customer's Review
          </span>
          <span id="cursive" className=" text-[25px]  animate-slideright2 ">
            WHAT THEY SAY?
          </span>
        </div>
        <div className="w-[100%] h-[100%] m-auto">
          <ReviewSwiper />
        </div>
        <div className="w-full h-[100%]">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Review;
