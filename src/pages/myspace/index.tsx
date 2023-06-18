import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { CardViewer, YouTubeVideo } from '@/components/extras';

export default function FirstPost() {
    return (
        <div className=" bg-white">
            <Header />
            <Quotes />
            <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                <h3 className= " text-center">
                    Working on something Awesome , checkout the wonderful Earthrise image in mean time.<br />

                </h3>
                <div className=""><img src="/apollo08_earthrise.jpg" className='mx-auto shadow rounded' alt='EarthRise'></img></div>
            </section>

            <Footer />
        </div>
    );
}

