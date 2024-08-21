import Banner from "./components/Banner";
import Creative from "./components/Creative";
import Features from "./components/Features ";
import Latest_Blog from "./components/Latest_Blog";
import Navber from "./components/Navbar";
import Review from "./components/Review";
import Services from "./components/Services";
import Who from "./components/Who";
import Work from "./components/Work";
function App() {
  return (
    <>
      <Navber />
      <Banner />
      <Services />
      <Who />
      <Work />
      <Creative/>
      <Review/>
      <Latest_Blog/>
      <Features/>
    </>
  );
}

export default App;
