import { useState } from 'react';
import Image from 'next/image';

export function Mail() {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(true);
    };


    return (
        <span className='text-ts_red'> bscharan
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

export function ImageCard({ url, title }: { url: string; title: string }) {
    return (
        <div className="">
            <Image className='mx-auto shadow rounded'
                src={url}
                width={500}
                height={500}
                alt={title}
            />
        </div>
    )
}


export function CardViewer({ url, title, type, notes, ...divProps }: {
    url: string;
    title: string;
    type: string;
    notes: string;
    [key: string]: any;
}) {
    var child;
    switch (type) {
        case 'youtube':
            child = < YouTubeVideo url={url} title={title} />
            break;
        case 'image':
            child = < ImageCard url={url} title={title} />
            break;
        default:
            return (<></>);
            break;
    }

    return (
        <div className=" shadow rounded-sm shadow-slate-500" {...divProps}>
            {child}
            <div className="text-center text-xs">{notes}</div>
        </div>
    );
}