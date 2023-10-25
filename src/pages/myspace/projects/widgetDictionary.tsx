import Logo from "@/components/logo";
import Head from "next/head";
import Image from 'next/image';

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
          <div className='border-b-4 border-t-2 border-dotted border-ts_red py-2 my-2'>
            <div className="">
              <Image className='mx-auto shadow rounded'
                src="/SwiftPad/SwiftPad_Banner.png"
                width={500}
                height={500}
                alt="Calvin and Hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson"
              />
            </div>
          </div>
          <WidgetDictionary />

          <div className="container mx-auto pt-3 pb-1 m-1 text-center text-ts_red ">
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
