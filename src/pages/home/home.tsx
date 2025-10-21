import Footer from "@/components/Footer/Footer";
import About from "@/sections/About/About";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import CtaBanner from "@components/ctaBanner/ctaBanner";
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
      <PrimaryHeader />
      <About />
      <CtaBanner />
      <Footer />
    </>
  );
}
export default Home;
