import { canOrderCountry } from "../../constants";
import { categories } from "../../constants";
const Footer = () => {
  return (
    <div
      className="w-full h-[auto] pb-[30px] bg-cover bg-center flexColCenter 3lg:flexRowCenter justify-around flex-wrap  "
      style={{ backgroundImage: `url(/bg1.jpg)` }}
    >
      <div className="FooterController">
        <span className=" font-bold text-[25px] text-emerald-500 ">
          Locations
        </span>
        {canOrderCountry.slice(0, 5).map((country) => (
          <span className="Footerstyle ">{country.Countryname}</span>
        ))}
      </div>
      <div className="FooterController">
        <span className=" font-bold text-[25px] text-emerald-500">
          Quick Links
        </span>
        {categories.map((categories) => (
          <a href={`#${categories}`} className=" Footerstyle">
            {categories}
          </a>
        ))}
      </div>
      <div className="FooterController">
        <span className=" font-bold text-[25px] text-emerald-500 ">
          Contact Info
        </span>
        <span className=" Footerstyle">+613-555-0176 </span>
        <span className=" Footerstyle">+613-555-0193 </span>
        <span className=" Footerstyle">fastfood@gmail.com</span>
        <span className=" Footerstyle">fastfreshfood1@gmail.com</span>
        <span className=" Footerstyle">Base on Canada🍁</span>
      </div>
      <div className="FooterController">
        <span className=" font-bold text-[25px] text-emerald-500">
          Follow Us
        </span>
        <span className=" Footerstyle">FaceBook</span>
        <span className=" Footerstyle">Twitter</span>
        <span className=" Footerstyle">Instgram</span>
        <span className=" Footerstyle">fastfreshfood1@gmail.com</span>
        <span className=" Footerstyle">Linked In</span>
      </div>
    </div>
  );
};

export default Footer;
