import Footer from "@/components/footer";
import Header from "@/components/header";

function AboutPage() {
    return (
        <>
        <Header/>
        <div className=" bg-slate-200 mx-auto text-center shadow rounded-lg w-2/3">
        <div className="mx-auto w-1/6" >
             <img src="/bscharan.png"  className="mx-auto shadow-xl p-2 m-2 rounded"alt='bscharan Github Profile Picture'/>
        </div>
        {/* TODO Insert my github Image */}
        <div> I am an artist and internet is my canvas</div>
        
        {/* TODO A Little Intro About Me */}
        <div>
            <h3>Experience</h3>
            <div>Senior Member of Techinal Staff - Oracle</div>
            <div>Software Engineer - Samsung R&D</div>
        </div>
        {/* TODO Education / Experience */}
        <div>
            <h3>Education</h3>
            <div>B.Tech Electronics and Communication Engineering</div>
            <div>Indian Institute of Technology Guwahati </div>
        </div>
        {/* QUOTES */}
        </div>
        <Footer />
        </>
    );
}

export default AboutPage;