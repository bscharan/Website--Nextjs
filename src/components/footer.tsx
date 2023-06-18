import Link from "next/link";

const Footer = () => {
    return (
      <footer className="">
        <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
        &copy; bscharan
        </div>
        <div className="flex gap-4 justify-center px-2 text-gray-600">
            <div className="hover:text-[#c02c38]"><a><Link href="/"><div > Home</div></Link></a></div>
            <div className="hover:text-[#c02c38]"><a><Link href=""><div > Blog</div></Link></a></div>
            <div className="hover:text-[#c02c38]"><a><Link href=""><div > Projects</div></Link></a></div>
            <div className="hover:text-[#c02c38]"><a><Link href=""><div > Contact</div></Link></a></div>
        </div>
      </footer>
    );
  
  };
  
  export default Footer;