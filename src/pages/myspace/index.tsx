import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';


export default function FirstPost() {
    return (
        <div className=" bg-white">
            <Header />
            <Quotes />
            <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                <h3 className=" text-center">
                    Working on something Awesome, checkout the wonderful pictures in mean time.<br />
                </h3>
                <div className=" py-2 lg:mx-48">
                    <NextJsCarousel />
                </div>
            </section>
            <Footer />
        </div>
    );
}


class NextJsCarousel extends Component {
    render() {
        return (
            <Carousel >
                <div>
                    <Link target="_blank" className='text-[#c02c38]' href='https://en.wikipedia.org/wiki/Earthrise'> EarthRise</Link>
                    <br />
                    <Image
                        className='mx-auto shadow rounded px-5 py-5'
                        src="/extra/apollo08_earthrise.jpg"
                        width={500}
                        height={500}
                        alt="EarthRise"
                    />
                </div>
                <div>
                    <Link target="_blank" className='text-[#c02c38]' href='https://www.eso.org/public/images/26a_big-vlt/'> 2M1207 (Very Large Telescope)</Link>
                    <br />
                    <Image
                        className='mx-auto shadow rounded'
                        src="/extra/26a_big-vlt.jpg"
                        width={500}
                        height={500}
                        alt="2M1207"
                    />
                </div>
                <div>
                    <Link target="_blank" className='text-[#c02c38]' href='https://webbtelescope.org/contents/media/images/2020/54/4766-Image'> Pluto and Charon (New Horizons)</Link>
                    <br />
                    <Image
                        className='mx-auto shadow rounded'
                        src="/extra/PlutoAndCharon.png"
                        width={500}
                        height={500}
                        alt="PlutoAndCharon"
                    />
                </div>
                <div>
                    <Link target="_blank" className='text-[#c02c38]' href='https://webbtelescope.org/contents/media/images/2020/38/4718-Image'> Jupiter and Io (Cassini)</Link>
                    <br />
                    <Image
                        className='mx-auto shadow rounded'
                        src="/extra/JupiterAndIo.png"
                        width={500}
                        height={500}
                        alt="JupiterAndIo"
                    />
                </div>
            </Carousel>
        );
    }
};


