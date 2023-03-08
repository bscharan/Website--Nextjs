import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>SAI CHARAN BODDA</title>
      </Head>

      <main className="bg-white text-center py-3">
        <section className="bg-slate-100 shadow-lg px-10 sm:mx-6 md:mx-24 lg:mx-48 ">
          <div className="border-b-4 border-dotted border-[#c02c38] py-2 my-2">
            <h1 className="mt-5">Hey Hi, I am</h1>
            <a href="http://bscharan.com"> <img src="/Logo.png" className="mx-auto w-64"></img></a>
            <h1> Welcome' to my digital space.</h1>
            <h2 ></h2>
            <h3>
                Well, There are lots of easter eggs hidden in this site for you to find.
                <br />happy Exploring! 
            </h3>
          
            <div className=" flex justify-center text-[#c02c38] my-4">
              <div className="px-4 mx-2"><Link href='/blog'>My Space </Link></div>
              <div className="px-4 mx-2"><Link href="/blog/blog001">Resume</Link></div>
              <div className="px-4 mx-2"><Link href="./Sources/projects.html">Works</Link></div> 
              <div className="px-4 mx-2"><Link href="./Sources/about.html">About</Link></div> 
              <div className="px-4 mx-2"><Link href="./Sources/contactme.html">Contact</Link></div>
            </div>
          </div>
          <div className='border-b-4 border-dotted border-[#c02c38] py-2 my-2'>
            <img src="/CHQuote.png" className="mx-auto shadow-lg"></img>
            <h3>
                There is no enough time to make all the things i want the <a className='text-[#c02c38]' href="https://docs.google.com/document/d/1dmSixLSognXm6lWpv1hTmiAVKb51kGFVK8T-rTPMTKM/edit?usp=sharing">
                  internet to have</a>. hoping one of you will work on them are make our internet little more beautiful <br />
            </h3>
          </div>
          <h3>
            you can report issues if you find any at <a className='text-[#c02c38]' href=""> bscharan1729@gmail.com</a>
          </h3>
        </section>
      </main>
    </div>
  )
}
