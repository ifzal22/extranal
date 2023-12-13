import Banner from "@src/Components/Banner/Banner";
import Footer from "@src/Components/Footer";

import CardList from "@src/Components/cardList/CardList";
import Videos from "./videoItem/page";
export const metadata = {
  title: "Videos",
  description: "My personal platfrom",
};
const Home = () => {
  return (
    <>
      <Banner></Banner>

      <Videos></Videos>
      <CardList />
      <Footer></Footer>
    </>
  );
};

export default Home;
