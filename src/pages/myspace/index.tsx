import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { CardViewer, YouTubeVideo } from '@/components/extras';

export default function FirstPost() {
    return (
        <div className=" bg-black">
            <Header />
            <Quotes />

            <Footer />
        </div>
    );
}

