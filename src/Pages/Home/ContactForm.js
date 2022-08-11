import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContactForm = () => {
    return (
        <div
         className="hero max-h-screen xsm:w-full"
         style={{background:`url(${appointment}) `}}
         >
            <div className="hero-content flex-col my-16">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl font-bold flex justify-center text-secondary">Contact Us</h1>
                    <p className="py-1 text-4xl text-white">Stay connected with us</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <div className="card-body leading-5">
                        <div className="form-control">
                            <input type="email" placeholder="Email Address" className="input lg:w-[450px] rounded-lg" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input lg:w-[450px] rounded-lg" />
                        </div>
                        <div className='form-control'>
                        <textarea className="textarea lg:w-[450px] h-36" placeholder="Your message"></textarea>
                        </div>
                        <div className="flex justify-center mt-9">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;