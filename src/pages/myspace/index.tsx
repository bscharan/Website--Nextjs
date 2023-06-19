import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';
export default function FirstPost() {
    return (
        <div className=" bg-white">
            <Header />
            <Quotes />
            <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                <h3 className=" text-center">
                    Working on something Awesome , checkout the wonderful Earthrise image in mean time.<br />

                </h3>
                <div className=" py-2">
                    <Image
                        className='mx-auto shadow rounded'
                        src="/apollo08_earthrise.jpg"
                        width={500}
                        height={500}
                        alt="EarthRise"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}

