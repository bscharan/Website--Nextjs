import { CardViewer } from "@/components/extras";
import Logo from "@/components/logo";
import Head from "next/head";

export default function Songs_Recos() {
    return (
        <div>
            <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
                <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                    <div className="mx-auto w-1/4" ><Logo /></div>

                    {/* TODO */}
                    <Songs_RecosList />
                    <MusicGrid />

                    <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
                        &copy; bscharan
                    </div>
                </section>
            </main>

        </div>
    );
}

// TODO
function Songs_RecosList() {
    return (
        <div>

        </div>
    )
}


function MusicGrid() {
    const music001 = new PostCard("https://www.youtube.com/embed/DVx8L7a3MuE", "Youtube Video : Brandy - Looking Glass", "", 'youtube')
    const music002 = new PostCard("https://www.youtube.com/embed/v_B3qkp4nO4", "Youtube Video : Shotgun - George Ezra", "", 'youtube')
    const music003 = new PostCard("https://www.youtube.com/embed/tJkW0Clsvrk", "Youtube Video : Take It to the Limit - Eagles", "", 'youtube')
    const music004 = new PostCard("https://www.youtube.com/embed/u1V8YRJnr4Q", "Youtube Video : Have You Ever Seen The Rain - Creedence Clearwater Revival", "", 'youtube')

    return (
        <>
            <h1 className=" text-xl text-center underline text-cyan"> Music Recos </h1>
            <div className="text-center text-xs p-2">Well truth be told, I have been listening to almost same set of ~20 since 2016, so you better get recomendation from someone else, anyway, here are my favourites</div>
            <div className="grid sm:grid-cols-3 gap-4 mx-2 my-2">
                <CardViewer url={music001.url} title={music001.title} type={music001.type} notes={music001.notes} />
                <CardViewer url={music002.url} title={music002.title} type={music002.type} notes={music002.notes} />
                <CardViewer url={music003.url} title={music003.title} type={music003.type} notes={music003.notes} />
                <CardViewer url={music004.url} title={music004.title} type={music004.type} notes={music004.notes} />
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

