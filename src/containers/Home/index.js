import React from "react";
import ComponentCarousel from "../../components/Carousel/CreateCarousel";
import TopSellingDonuts from "../../components/TopSellingDonuts/TopSellingDonuts";
import TopSellingGelato from '../../components/TopSellingGelato/TopSellingGelato';
const Home = () => {
  return <div>
    <ComponentCarousel />
    <TopSellingDonuts/>
    <TopSellingGelato/>
  </div>;
};

export default Home;
