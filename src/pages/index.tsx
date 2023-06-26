import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/logo';
import { useState } from 'react';
import { Mail } from '@/components/extras';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sai Charan Bodda</title>
      </Head>

      <main className="bg-white text-slate-600 italic bg-cover min-h-screen text-center py-3">
        <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
          <div className="border-b-4 border-dotted border-[#c02c38] py-2 my-2">
            <Intro></Intro>
            <div className=" flex justify-center text-[#c02c38] my-4 gap-2">
              <div className="mx-2 hover:text-2xl"><Link href='/myspace'>My Space </Link></div>
            </div>
          </div>

          <div className='border-b-4 border-dotted border-[#c02c38] py-2 my-2'>
            <div className="">
              <Image className='mx-auto shadow rounded'
                src="/CHQuote.png"
                width={500}
                height={500}
                alt="Calvin and Hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson"
              />
            </div>
            <h3>
              There is no enough time to make all the things i want the <Link className='text-[#c02c38]' href='/myspace/others/future_todo'>
                internet to have</Link>. hoping one of you will work on them are make our internet little more beautiful <br />
            </h3>
          </div>

          <h3>
            you can report issues if any at <Mail></Mail>
          </h3>
          <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
            &copy; bscharan
          </div>
        </section>
      </main>
    </div>
  )
}

function Intro() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(true);
  };

  const [showLines, setShowLines] = useState(false);

  const showHiddenLines = () => {
    setShowLines(!showLines);
  };

  return (
    <>
      <h1 className="mt-5">Hey Hi, I am</h1>
      <div className="mx-auto w-1/2 sm:w-1/2" ><Logo /></div>
      <h1> Welcome to my digital space.</h1>
      <h3>
        I am an 
        {showText ? <span className='text-[#c02c38]'> Engineer </span> : (
          <button className='text-blue-600' onClick={toggleText}> &nbsp;Artist </button>
        )} and this website is my <button className="text-blue-600" onClick={showHiddenLines}>Canvas</button>.
      </h3>
      {showLines && (
        <>
          <div>There are lots of easter eggs hidden in this site for you to find.
            <br />Happy Exploring!
          </div>
        </>
      )}

    </>
  )
}