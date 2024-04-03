import { ReactNode } from "react";
import Navigation from "@/src/components/Navigation/Navigation";
import Footer from "@/src/components/Footer/Footer";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
