import { useMemo } from "react";

const CabinIcon = ({ cabinDisplay }) => {
  const cabinIconStyle = useMemo(() => {
    return {
      display: cabinDisplay,
    };
  }, [cabinDisplay]);

  return (
    <img
      className="relative w-[1005px] h-[632px] object-cover z-[0] ml-[-50px]"
      alt=""
      src="/4--cabin2@2x.png"
      style={cabinIconStyle}
    />
  );
};

export default CabinIcon;
