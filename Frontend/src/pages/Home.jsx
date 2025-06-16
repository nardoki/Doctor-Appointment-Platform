import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import heroImg01 from '../assets/images/Dr.hewanfesehatsion.jpg';
import heroImg02 from '../assets/images/hero-img01.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import faqImg from "../assets/images/faq-img.png"
import featureImg from '../assets/images/feature-img.png'

import About from '../components/About/About';
import ServicesList from "../components/Services/ServicesList";
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <section className="hero__section pt-16 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-24 items-center justify-between">
            <div className="lg:w-[576px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[880] md:text-[80px] md:leading-[70px]">
                Find a Doctor and <br /> Book an Appointment
              </h1>
              <Link to='/doctors'>
              <button className="btn">Request an appointment</button>
              </Link>
            </div>
          
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full h-full rounded-md" src={heroImg01} alt="Hero Image 1" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px] mt-24 rounded-md" alt="Hero Image 2" />
              </div>
            
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best medical services</h2>
            <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched,
              expert health care. </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Quickly locate and connect with qualified healthcare professionals in your area, ensuring 
                you receive the best medical care tailored to your needs.
                </p>

                <Link
                  to='/doctors'
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>


            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center ">
                <img className="rounded-md"src ={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">AI symptom checker</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Use our advanced AI-driven tool to analyze your symptoms and provide insights, helping you 
                understand potential health issues and guiding you to the right care.
                </p>

                <Link
                  to='/doctors'
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Easily schedule appointments with your preferred doctors at your convenience, ensuring timely
                 medical attention without the hassle of long waiting times.
                </p>

                <Link
                  to='/doctors'
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
          </div>
          <ServicesList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual sheduling
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, <br />and use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn mt-4">Learn more</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-770px flex justify-end mt-50px lg:nt-0">
              <img src={featureImg}  className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>
     
      
       <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              Our health System offers
              unmatched,expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* =================== faq section ==================== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =================== faq section end ==================== */}

      {/* =================== testimonial ==================== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* =================== testimonial end ==================== */}

    </>
  );
};

export default Home;
