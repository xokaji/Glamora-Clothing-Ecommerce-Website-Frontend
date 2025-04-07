import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/MainBanner/Banner';
import { Popular } from '../../components/Popular/Popular';
import { Offers } from '../../components/Offers/Offers';
import { Newcollections } from '../../components/newCollections/Newcollections';
import { Newsletter } from '../../components/Newsletters/News';
import { ChatPopup } from '../../components/ChatPopUp/Chat';
import { Manbanner } from '../../components/ManBanner/Manbanner';
import { AccCollection } from '../../components/AccesorriesCollection/AccCollection';
import { AccBanner } from '../../components/Accbanner/AccBanner';
import { Gifts } from '../../components/gifts/Gifts';
import { ScaleLoader } from 'react-spinners';


export const Shop = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loadingContainer">
        <ScaleLoader color="#36d7b7" height={35} />
        <p>Loading Home...</p>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <ChatPopup />
      <Popular />
      <Offers />
      <Newcollections />
      <Manbanner />
      <AccCollection />
      <AccBanner />
      <Gifts />
      <Newsletter />
    </div>
  );
};
