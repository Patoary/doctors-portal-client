import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Footer from '../Shared/Footer';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;