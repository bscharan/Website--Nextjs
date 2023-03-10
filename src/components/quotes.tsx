import { useState, useEffect } from "react";

const Quotes = () => {
    const changeInterval = 5000; // 5 seconds in milliseconds
    const my2DArray: string[][] = [
        ['Stay hungry. Stay foolish.',
            'Whole Earth Catalog',
                'https://www.youtube.com/watch?v=UF8uR6Z6KLc'],
        ['The present is theirs; the future, for which I really worked, is mine.',
            'Nikola Tesla', ''],
        ['People who are crazy enough to think they can change the world are the ones who do',
            'Steve Jobs', ''],
        ['we are punished by our sins, not for them',
            'Elbert Hubbard',
                'https://ncase.me/trust/'],
        ['Just because something is going to break in the end, doesn\'t mean that it can\'t have a lasting effect on future',
            'Tom Scott',
                'https://www.youtube.com/watch?v=BxV14h0kFs0s'],
      ];
      const [quoteIndex, setCurrentStringIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % my2DArray.length);
        }, changeInterval);

        return () => clearInterval(interval);
    },);
    
      return (
        <>
        <div className="bg-white shadow text-center rounded-lg mx-4 sm:mx-auto sm:w-3/4">

            <div className="py-2"> {
            my2DArray[quoteIndex][2] !='' ? <a href={my2DArray[quoteIndex][2]}> {my2DArray[quoteIndex][0]}</a> 
            : <span>{my2DArray[quoteIndex][0]}</span>
            }</div>
            <div className="text-[#c02c38] text-right mb-2 mr-auto w-4/5 px-4 "> -{my2DArray[quoteIndex][1]}</div>
        
        </div>
        </>
      );
    };

export default Quotes;