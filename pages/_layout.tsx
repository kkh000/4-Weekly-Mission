import Navigation from "@/src/components/Navigation/Navigation";
import Footer from "@/src/components/Footer/Footer";
import { ChildrenProps } from "@/src/types/commonTypes";

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
