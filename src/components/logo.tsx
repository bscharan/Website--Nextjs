import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" >
            
            <Image
                src="/Logo.png"
                width={500}
                height={500}
                alt="BSCHARAN LOGO" />
        </Link>
    );
};

export default Logo;