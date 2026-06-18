import Image from "next/image";
import  Banner  from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Service";
import Why from "./components/Why";
import Testimonal from "./components/Tesitmonal";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Services/>
   <Why/>
   <Testimonal/>
   <Footer/>
   </>
  );
}
