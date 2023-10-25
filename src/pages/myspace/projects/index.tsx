import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects_Index() {
    return (
        <div className=" bg-white">
            <Header />

            <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">

                <h3 className=" text-center">
                    Under Development, so page is not populated yet.<br />
                </h3>

                <div className=" py-2">
                    <SwiftPad />
                    <WidgetDictionary />
                    <Automatic_Rhythm_generation />

                </div>
            </section>

            <Footer />
        </div>
    );
}

function SwiftPad() {
    return (
        <Link href="/myspace/projects/swiftpad" >
            <div >
                <Image
                    className='mx-auto shadow rounded'
                    src="/SwiftPad/SwiftPad_Icon.png"
                    width={250}
                    height={250}
                    alt="SwiftPad App Icon"
                />
                <p className=' text-center text-ts_red'> SwiftPad </p>
            </div>
        </Link>
    )
}

function WidgetDictionary() {
    return (
        <Link href="/myspace/projects/swiftpad" >
            <div >
                <Image
                    className='mx-auto shadow rounded'
                    src="/SwiftPad/SwiftPad_Icon.png"
                    width={250}
                    height={250}
                    alt="SwiftPad App Icon"
                />
                <p className=' text-center text-ts_red'> WidgetDictionary </p>
            </div>
        </Link>
    )
}

function Automatic_Rhythm_generation() {
    return (
        <Link href="/myspace/projects/swiftpad" >
            <div >
                <Image
                    className='mx-auto shadow rounded'
                    src="/SwiftPad/SwiftPad_Icon.png"
                    width={250}
                    height={250}
                    alt="SwiftPad App Icon"
                />
                <p className=' text-center text-ts_red'> Automatic_Rhythm_generation </p>
            </div>
        </Link>
    )
}


