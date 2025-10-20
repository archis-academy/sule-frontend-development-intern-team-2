import Footer from "@/components/Footer/Footer";
import About from "@/sections/About/About";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import Listings from "@/sections/Listings/Listings";

// Home.tsx
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
      />
      <PrimaryHeader />
      <section id="about">
        <About />
      </section>
      <section id="listings">
        <Listings />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
export default Home;
