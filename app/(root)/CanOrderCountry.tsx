type Props = {
  canOrderCountry: string;
  Countryname: string;
};

const CanOrderCountry = ({ canOrderCountry, Countryname }: Props) => {
  return (
    <div
      key={Countryname}
      className="w-[400px] h-[200px] relative group rounded-[10px] overflow-hidden transition-all duration-100 ease-in "
    >
      <div
        id="cursive"
        className="w-[100%] h-[60px] absolute text-[40px] text-orange-500 flex-row items-center justify-center   z-[999] bottom-0 hidden group-hover:flex  group-hover:bg-[#0000003a] group-hover:animate-slideup422   "
      >
        {Countryname}
      </div>
      <img
        src={canOrderCountry}
        className="w-[100%] h-[100%] m-auto py-[7px]   cursor-pointer scale-105 rounded-[10px] overflow-hidden "
      />
    </div>
  );
};

export default CanOrderCountry;
