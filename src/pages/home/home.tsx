import Footer from "@/components/Footer/Footer";
import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";
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
      />
      <PrimaryHeader />
      <Footer />
    </>
  );
}

export default Home;
