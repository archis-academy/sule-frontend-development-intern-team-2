import Footer from "@/components/Footer/Footer";
import About from "@/sections/About/About";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
import Partners from "@/components/partnersSection/partners";
import OurServices from "@/components/ourServices/ourServices";
import CtaBanner from "@components/ctaBanner/ctaBanner";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import Listings from "@/sections/Listings/Listings";


function Home() {
  return (
    <>
      {/* Home anchor */}
      <div id="home" />

      <SecondaryHeader
        address={
          <>
            <strong>Rezilla,</strong> 18 Grattan St, Brooklyn
          </>
        }
        phone="+1 206–214–2298"
        email="support@rezilla.com"
      />{" "}
      <PrimaryHeader /> 
      <section id="about">
          <Partners />
      <About />
      </section>
      <section id="listings">
        <Listings />
      </section>
      <section id="footer">
     
      <OurServices />
      <CtaBanner />
      <Footer />
      </section>
    </>
  );
}
export default Home;
