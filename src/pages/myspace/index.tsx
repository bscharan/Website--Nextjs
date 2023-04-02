import Quotes from '@/components/quotes';
import Footer from '@/components/footer';
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

    return (
        <>
            <h1 className=" text-xl text-center underline text-cyan"> Recommendations </h1>
            <div className="text-center text-xs">Here are the list of wobjects that found interesting, inspiring on internet since 2015</div>
            <div className="grid sm:grid-cols-3 gap-4 mx-2 my-2">
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/BxV14h0kFs0" title="Youtube Video : Tom Scott This Video has X views" />} notes="" />
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/UF8uR6Z6KLc" title="Youtube Video : Steve Jobs commencement speech Stanford" />} notes="" />
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/8tkPDCK5e4s" title="Youtube Video : William Blake Tyger Tyger Poem" />} notes="" />
                <div className=""><img src="/CHQuote.png" className='mx-auto shadow rounded' alt='unlicenced calvin and hobbes quote: There is not enough time to do all the nothing we want to do. - Bill Watterson '></img></div>
            </div >
        </>
    )
}

function MusicGrid() {

    return (
        <>
            <h1 className=" text-xl text-center underline text-cyan"> Music Recos </h1>
            <div className="text-center text-xs p-2">Well truth be told, I have been listening to almost same set of ~20 since 2016, so you better get recomendation from someone else, anyway, here are my favourites</div>
            <div className="grid sm:grid-cols-3 gap-4 mx-2 my-2">
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/DVx8L7a3MuE" title="Youtube Video : Brandy - Looking Glass" />} notes="" />
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/v_B3qkp4nO4" title="Youtube Video : Shotgun - George Ezra" />} notes="" />
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/tJkW0Clsvrk" title="Youtube Video : Take It to the Limit - Eagles" />} notes="" />
                <CardViewer child={<YouTubeVideo url="https://www.youtube.com/embed/u1V8YRJnr4Q" title="Youtube Video : Have You Ever Seen The Rain - Creedence Clearwater Revival" />} notes="" />
            </div >
        </>
    )
}