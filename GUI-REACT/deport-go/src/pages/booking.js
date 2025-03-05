import React from "react";
import Header  from "../components/Header";
import Footer from "../components/Footer";
import Buscard from "../components/2-BusCards";
import SeatSelection from "../components/2-SeatSelection";
import BusCardContainer from "../components/2-BusCards";


export default function Home() {
    return(

        
        <div>
            <Header />
            
            <SeatSelection/>
            <BusCardContainer/>

            

        </div>
        



    );




}