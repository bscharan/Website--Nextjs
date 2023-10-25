import Logo from "@/components/logo";
import Head from "next/head";

export default function YouTubeChannels_Recos() {
    return (
        <div>
            <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
                <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                    <div className="mx-auto w-1/4" ><Logo /></div>

                    <YouTubeChannels_RecosList />

                    <div className="container mx-auto pt-3 pb-1 m-1 text-center text-ts_red ">
                        &copy; bscharan
                    </div>
                </section>
            </main>

        </div>
    );
}

// TODO
function YouTubeChannels_RecosList() {
    return (
        <div>

        </div>
    )
}
