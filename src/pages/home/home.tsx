import Footer from "@/components/Footer/Footer";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
import Partners from "@/components/partnersSection/partners";
import OurServices from "@/components/ourServices/ourServices";


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
      />
       <Partners/>
       <OurServices/>
      <Footer />
    </>
  );
}

export default Home;
