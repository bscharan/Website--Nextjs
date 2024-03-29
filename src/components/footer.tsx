import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto pt-3 pb-1 m-1 text-center text-ts_red ">
        &copy; bscharan
      </div>
      <div className="flex gap-4 justify-center px-2 text-gray-600">
        <div className="hover:text-ts_red"><a><Link href="/"><div > Home</div></Link></a></div>
        <div className="hover:text-ts_red"><a><Link href=""><div > Blog</div></Link></a></div>

        {/* <div className="hover:text-ts_red"><a><Link href="/myspace/projects"><div > Projects</div></Link></a></div> */}
        <div className="hover:text-ts_red"><a><Link href=""><div > Contact</div></Link></a></div>
      </div>
    </footer>
  );

};

export default Footer;