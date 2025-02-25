import Partners from "../components/Partners";
import Header  from "../components/Header";
import Hero from "../components/Hero";
import Todis from "../components/Slider";
import Payments from "../components/Payments";
import Footer from "../components/Footer";
import BookingInfo from "../components/BookingInfo";
import Services from "../components/Services";


export default function Home() {
    return(

        
        <div>
            <Header />
            <Todis />
            <Hero />
            <BookingInfo />
            <Partners />
            <Payments/>
            <Services/>
            <Footer/>

        </div>
        



    );




}