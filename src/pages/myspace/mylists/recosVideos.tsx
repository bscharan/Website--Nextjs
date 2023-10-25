import { CardViewer } from "@/components/extras";
import Logo from "@/components/logo";
import Head from "next/head";

export default function YoutubeVideos_Recos() {
    return (
        <div>
            <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
                <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                    <div className="mx-auto w-1/4" ><Logo /></div>

                    {/* TODO */}
                    <YoutubeVideos_RecosList />
                    <RecommendationsGrid />


                    <div className="container mx-auto pt-3 pb-1 m-1 text-center text-ts_red ">
                        &copy; bscharan
                    </div>
                </section>
            </main>

        </div>
    );
}

// TODO
function YoutubeVideos_RecosList() {
    return (
        <div>

        </div>
    )
}


function RecommendationsGrid() {
    const post001 = new PostCard('https://www.youtube.com/embed/BxV14h0kFs0', 'Youtube Video : Tom Scott This Video has X views', 'Well this is one of my favourite Videos,Here are the list of wobjects that found interesting, inspiring on internet since 2015,Here are the list of wobjects that found interesting, inspiring on internet since 2015,Here are the list of wobjects that found interesting, inspiring on internet since 2015', 'youtube')
    const post002 = new PostCard('https://www.youtube.com/embed/UF8uR6Z6KLc', 'Youtube Video : Steve Jobs commencement speech Stanford', '', 'youtube')
    const post003 = new PostCard('https://www.youtube.com/embed/8tkPDCK5e4s', 'Youtube Video : William Blake Tyger Tyger Poem', '', 'youtube')
    const post004 = new PostCard('/CHQuote.png', 'calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson ', '', 'image')

    return (
        <>
            <h1 className=" text-xl text-center underline text-cyan"> Recommendations </h1>
            <div className="text-center text-xs">Here are the list of wobjects that found interesting, inspiring on internet since 2015</div>
            <div className="grid sm:grid-cols-3 gap-3 mx-2 my-2">
                <CardViewer url={post001.url} title={post001.title} type={post001.type} notes={post001.notes} />
                <CardViewer url={post002.url} title={post002.title} type={post002.type} notes={post002.notes} />
                <CardViewer url={post003.url} title={post003.title} type={post003.type} notes={post003.notes} />
                <CardViewer url={post004.url} title={post004.title} type={post004.type} notes={post004.notes} />
                <CardViewer url={post002.url} title={post002.title} type={post002.type} notes={post002.notes} />
            </div >
        </>
    )
}


class PostCard {
    private _url: string;
    private _title: string;
    private _notes: string;
    private _type: string;

    constructor(url: string, title: string, notes: string, type: string) {
        this._url = url;
        this._title = title;
        this._notes = notes;
        this._type = type;
    }

    public get url(): string {
        return this._url;
    }

    public get title(): string {
        return this._title;
    }

    public get notes(): string {
        return this._notes;
    }

    public get type(): string {
        return this._type;
    }
}

