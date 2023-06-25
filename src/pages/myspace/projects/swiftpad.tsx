import Logo from "@/components/logo";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";

export default function App_SwiftPad() {
  return (
    <div>
      <Head>
        <title>Swiftpad - Notes and Bookmarks </title>
      </Head>
      <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
        <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
          <div className="mx-auto w-1/4" ><Logo /></div>

          <div className='border-b-4 border-t-2 border-dotted border-[#c02c38] py-2 my-2'>

            <Image className='mx-auto shadow rounded'
              src="/SwiftPad_Banner.png"
              width={500}
              height={500}
              alt="SwiftPad Android Application banner"
            />
          </div>
          <SwiftPad />

          <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
            &copy; bscharan
          </div>
        </section>
      </main>

    </div>
  );
}

function SwiftPad() {
  return (
    < div className='p-4 m-4'>
      < strong className='text-[#c02c38]' >Swiftpad </ strong>
      <p className='px-4 mx-4'>
        Swiftpad is developed to be made as a single journal app to store all your ideas, and thoughts, segregate your bookmarks, and everything that you find interesting. These ideas and thoughts can be in form of images, text, or audio notes. With an added Eisenhower decision matrix in form of TODO, it can enhance your productivity.
      </p>
      <br />
      <strong className='text-[#c02c38]' >**Features**</strong>
      <p className='px-4 mx-4' >
        <ul className='list-disc px-4 mx-4'>
          <li>Store Text, Images and Audio</li>
          <li>Save Images, Text , and Links from other applications</li>
          <li>TODO- lists in Eisenhower Decision Matrix</li>
          <li>Hide saved Text/ Images/Audio inside biometric container</li>
          <li>Easy Calender to navigate through entries seemlessly</li>
          <li>Easy Edit for Saved Contents</li>
          <li>Wonderful homescreen widgets for Swift access</li>
          <li> Most Importantly its ***ADS FREE***</li>
        </ul>
      </p>

      <strong className='text-[#c02c38]' >**Look Out for**</strong>
      <p className='px-4 mx-4' >
        <ul className='list-disc px-4 mx-4'>
          <li>  Accessibility Support for Vision deficiency</li>
          <li>Backup and Restore</li>
          <li>Sharing content across other applications</li>
          <li>Easy Scan for QR Codes</li>
          <li>Themes and Localisation Support</li>
        </ul >
      </p >
      <br />
      <p className='px-4 mx-4' >
        It also provides a wonderful home screen widget to vault your idea with a single tap. no need to search and open the application to add one.
      </p>
      <p className='px-4 mx-4' >
        It provides a beautiful UI to view your stored thoughts.
        if you want to navigate your thoughts through time, know it's covered too. we provide amazing calendar navigation. a secure vault with uses inbuilt device authentication (including fingerprint) to store/hide your ideas from peeping eyes.
      </p>
      <br />
      <strong className='text-[#c02c38]' >DownLoad From Google Play Store :
        <Link className="text-blue-600" href="https://play.google.com/store/apps/details?id=com.bscharan.myideajournal" >  here </Link>
      </strong>
      <br />
      <strong className='text-[#c02c38]' >SwiftPad Privacy Policy :
        <Link className="text-blue-600" href="/Privacy_Policy/swiftpad" >  here </Link>
      </strong>



    </div >
  )
}
