import Logo from "@/components/logo";
import Head from "next/head";
import Image from 'next/image';

export default function Future_ToDo() {
    return (
        <div>
            <Head>
                <title>Hope</title>
            </Head>
            <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
                <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                    <div className="mx-auto w-1/4" ><Logo /></div>

                    <div className='border-b-4 border-t-2 border-dotted border-[#c02c38] py-2 my-2'>
                        <div className="">
                            <Image className='mx-auto shadow rounded'
                                src="/extra/CHQuote.png"
                                width={500}
                                height={500}
                                alt="Calvin and Hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson"
                            />
                        </div>
                    </div>
                    <Content />

                    <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
                        &copy; bscharan
                    </div>
                </section>
            </main>

        </div>
    );
}

function Content() {
    return (
        <div className='p-4 m-4'  >

            <p className='text-center text-xl font-bold'>Here are the list of things i want internet to have one day.<br />
            </p>

            <strong className='text-[#c02c38]'> A personal DNS server.</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>
                    <li>A personal database consisting dnses.</li>
                    <li>If entry not available then search the actual dns.</li>
                    <li>If it is available directly communicate with the website without middle request from dns server( prevent DNS server logging)</li>
                </ul>
            </p>

            <strong className='text-[#c02c38]'>A Billion dots</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>

                    <li>A website with billion dots (similar to book A Million dots by Andrew Clements) where a major events are shown next to corresponding dots.</li>
                </ul>

            </p>
            <strong className='text-[#c02c38]'>
                Cloud Collection</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>

                    <li>A blog with all images of different types of clouds</li>
                </ul>

            </p>

            <strong className='text-[#c02c38]'>Sticky Notes- smartphone.</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>

                    <li>A full screen home screen widget that can show collection of sticky notes</li>
                    <li>Ability to add, delete and archive these notes from homescreen</li>
                </ul>

            </p>

            <strong className='text-[#c02c38]'>Fourier circles logo.</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>

                    <li>Want any name shown in as a video of moving Fourier circles.</li>
                    <li>Similar to the way Fourier face is shown in video by 3blue1brown. In his video of fourier series animation</li>
                    <li><a className='text-[#c02c38]' href=" https://youtu.be/r6sGWTCMz2k">Reference video by 3Blue1Brown </a></li>
                    <li>Status: not yet started 😢</li >
                </ul>

            </p>

            <strong className='text-[#c02c38]'>Ideajournal(SwiftPad)</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>

                    <li> An easy app with a companion widget to store all your ideas or things you want to save fast.</li>
                    <li> No need to open application and should be easy( minimum number of clicks to save)</li>
                    <li>Status: done.</li >
                    <li> <a className='text-[#c02c38]' href="https://play.google.com/store/apps/details?id=com.bscharan.myideajournal">Download SwiftPad on Google Play Store</a></li>
                </ul>

            </p>

            <strong className='text-[#c02c38]'>Widget dictionary</strong>
            <p className='px-4 mx-4' >
                <ul className='list-disc'>
                    <li>An easy app with a direct home screen widget to search words directly from the widget.</li>
                    <li>Widget is capable of showing meaning there itself.</li>
                    <li>No need to open an app everytime to search.</li>
                    <li>Status: template done. Needed words database.</li>
                </ul>
            </p>


        </div>
    )
}
