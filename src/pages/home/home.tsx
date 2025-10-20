import Footer from "@/components/Footer/Footer";
import About from "@/sections/About/About";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
import Partners from "@/components/partnersSection/partners";
import OurServices from "@/components/ourServices/ourServices";

import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";

function Home() {
  return (
    <>
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
        <Partners />
      <About />
   
      <OurServices />
      <Footer />
    </>
  );
}
export default Home;
