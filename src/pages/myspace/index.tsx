import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { CardViewer, YouTubeVideo } from '@/components/extras';

export default function FirstPost() {
    return (
        <div className=" bg-black">
            <Header />
            <Quotes />
            <RecommendationsGrid />
            <MusicGrid />
            <Footer />
        </div>
    );
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
