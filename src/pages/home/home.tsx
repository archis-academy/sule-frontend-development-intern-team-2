import SecondaryHeader from "@components/SecondaryHeader/SecondaryHeader";

function Home() {
  return (
    <SecondaryHeader
      address={
        <>
          <strong>Rezilla,</strong> 18 Grattan St, Brooklyn
        </>
      }
      phone="+1 206–214–2298"
      email="support@rezilla.com"
    />
  );
}

export default Home;
