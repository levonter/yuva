import CabinIcon from "./CabinIcon";

const HeroContainer = () => {
  return (
    <div className="absolute top-[160px] left-[calc(50%_-_720px)] w-[1440px] flex flex-row py-0 pr-0 pl-[164px] box-border items-start justify-start text-left text-5xl text-white font-h1 sm:flex sm:flex-col sm:items-start sm:justify-start sm:pl-5 sm:pr-5 sm:box-border sm:m-0">
      <div className="w-[375px] h-[632px] flex flex-col items-start justify-end gap-[41px] z-[2]">
        <div className="self-stretch flex flex-row items-start justify-start z-[2]">
          <img
            className="relative w-[142.66px] h-[76.98px]"
            alt=""
            src="/herotitle1.svg"
          />
        </div>
        <p className="m-0 self-stretch flex flex-row py-0 pr-0 pl-[41px] items-start justify-start z-[1]">
          <div className="flex-1 relative">
            Deprem bölgesinde orta-uzun vadeli barınma ve dirençli yaşam alanı
            ihtiyacı olan vatandaşlara pratik, akılcı, sağlıklı ve tasarruflu
            çözüm sunabilmek adına tasarlanmıştır.
          </div>
        </p>
        <div className="self-stretch flex flex-row py-0 px-12 items-start justify-start z-[0]">
          <img
            className="relative w-[22.09px] h-[66.5px]"
            alt=""
            src="/arrow-11.svg"
          />
        </div>
      </div>
      <CabinIcon cabinDisplay="block" />
    </div>
  );
};

export default HeroContainer;
