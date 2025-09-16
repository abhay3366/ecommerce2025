import React, { useState } from 'react'

const useGetLocation = () => {
  const [location, setLocation] = useState(" ");
  const [openDropDown, setOpenDropDown] = useState(false);
      const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();
        setLocation(data.address);
        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

 return { location, openDropDown, getLocation };
}

export default useGetLocation
