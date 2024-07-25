import { useState } from 'react';
import { Place } from '../types/kakao';

const useMap = () => {
  const [placeList, setPlaceList] = useState<Place[]>([]);

  const searchPlaces = async (place: string) => {
    if (!place.trim()) {
      return;
    }
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(place, placesSearchCB);
  };

  const placesSearchCB = (data: Place[], status: string) => {
    if (status === kakao.maps.services.Status.OK) {
      setPlaceList(data.slice(0.4));
    }
    if (status === kakao.maps.services.Status.ZERO_RESULT) {
      setPlaceList([]);
    }
    if (status === kakao.maps.services.Status.ERROR) {
      setPlaceList([]);
    }
  };

  return { searchPlaces, placeList };
};

export default useMap;
