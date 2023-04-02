import { useState } from 'react';

export function Mail() {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(true);
    };


    return (
        <span className='text-[#c02c38]'> bscharan
            {showText ? 1729 : (
                <button className="text-blue-500 underline" onClick={handleClick}>
                    click here to show
                </button>
            )}
            @gmail.com</span>
    )
}

export function YouTubeVideo({ url, title }: { url: string; title: string }) {
    return (
        <div className="relative overflow-hidden rounded-lg">
            <iframe
                src={url}
                title={title}
                className=" w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}


export function CardViewer({ child, notes, ...divProps }: {
    child: React.ReactNode;
    notes: string;
    [key: string]: any;
}) {
    return (
        <div {...divProps}>
            {child}
            <span>{notes}</span>
        </div>
    );
}