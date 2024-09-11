import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Product/Products";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Distributor from "./components/Distributor/Distributor";
import OnlineStore from "./components/OnlineStore/OnlineStore";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LastFooter from "./components/LastFooter/LastFooter";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle="Kami Menyediakan"
          title="Produk Berkualitas Langsung dari Peternakan"
        />
        <Products />
        <About setPlayState={setPlayState} />
        <Title subTitle="Distributor  Kami" title="Produk Kami Tersedia Di" />
        <Distributor />
        <Title
          subTitle="Toko Online Kami"
          title="Produk Kami Tersedia Di Platform Toko Online"
        />
        <OnlineStore />
        <Title
          subTitle="Kontak  Kami"
          title="Sangat mudah untuk menghubungi kami"
        />
        <Contact />
        <Title subTitle="" title="" />
        <Footer />
        <LastFooter />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
