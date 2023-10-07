import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';

function AboutPage() {
    return (
        <>
            <Header />
            <div className=" bg-slate-200 mx-auto text-center shadow rounded-lg w-2/3">
                <div className="mx-auto w-1/6" >
                    <Image className='mx-auto shadow-xl p-2 m-2 rounded'
                        src="/bscharan.png"
                        width={500}
                        height={500}
                        alt="bscharan Github Profile Picture"
                    />
                </div>
                {/* TODO Insert my github Image */}
                <div> I am an artist and internet is my canvas</div>

                {/* QUOTES */}
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;