import { ReactNode } from "react";
import Navigation from "@/pages/_components/Navigation/Navigation";
import Footer from "@/pages/_components/Footer/Footer";

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
