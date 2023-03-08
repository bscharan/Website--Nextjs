import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-00">
      <div className="container mx-auto py-3 m-1 flex justify-between ">
        <div className="invisible">Placeholder</div>
        <a href="http://bscharan.com" > <img src="/Logo.png" className="mx-auto w-28"></img></a>
        <div className="flex gap-6">
            <a><Link href=""><div>Home</div></Link></a>
            <a><Link href=""><div>About</div></Link></a>
        </div>
      </div>
    </header>
  );

};

export default Header;
