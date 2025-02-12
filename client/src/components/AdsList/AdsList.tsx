import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAds } from '../../store/adSlice';
import { getAllAds } from '../../services/apiServices';
import { RootState } from '../../store/store';

const AdList: React.FC = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state: RootState) => state.ad.ads);

  useEffect(() => {
    const fetchAds = async () => {
      const data = await getAllAds();
      dispatch(setAds(data));
    };
    fetchAds();
  }, [dispatch]);

  return (
    <div>
      <h1>Список объявлений</h1>
      {ads.map((ad) => (
        <div key={ad.id}>
          <h3>{ad.name}</h3>
          <p>{ad.location}</p>
          <p>{ad.type}</p>
        </div>
      ))}
    </div>
  );
};

export default AdList;
