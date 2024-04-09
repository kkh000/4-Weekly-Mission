import RootLayout from "./_layout";
import LandingHeader from "@/src/components/Landing/Header/LandingHeader";
import LandingMain from "@/src/components/Landing/Main/LandingMain";

const Home = () => {
  return (
    <RootLayout>
      <LandingHeader />
      <LandingMain />
    </RootLayout>
  );
};

export default Home;
