import Logo from "@/components/logo";
import Head from "next/head";

export default function App_WidgetDictionary() {
  return (
    <div>
      <Head>
        <title>Widget Dictionary</title>
      </Head>
      <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
        <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
          <div className="mx-auto w-1/4" ><Logo /></div>

          {/* TODO */}
          <div className='border-b-4 border-t-2 border-dotted border-[#c02c38] py-2 my-2'>
            <div className=""><img src="/SwiftPad_Banner.png" className='mx-auto shadow rounded' alt='SwiftPad Android Application banner '></img></div>
          </div>
          <WidgetDictionary />

          <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
            &copy; bscharan
          </div>
        </section>
      </main>

    </div>
  );
}

function WidgetDictionary() {
  return (
    <div>

    </div>
  )
}
