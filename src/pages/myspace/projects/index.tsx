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
                    <Link href="/myspace/projects/swiftpad" >
                        <div >
                            <Image
                                className='mx-auto shadow rounded'
                                src="/SwiftPad_Icon.png"
                                width={250}
                                height={250}
                                alt="EarthRise"
                            />
                            <p className=' text-center text-[#c02c38]'> SwiftPad </p>
                        </div>
                    </Link>

                </div>
            </section>

            <Footer />
        </div>
    );
}

