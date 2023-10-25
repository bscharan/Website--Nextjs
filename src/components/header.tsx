import Link from 'next/link';
import Logo from './logo';

const Header = () => {
  return (
    <header className="bg-gray-00">
      <div className="container mx-auto py-3 m-1 flex justify-between text-gray-600 ">
        <div className="invisible">Placeholder</div>
        <div className="mx-auto w-2/6 sm:w-1/6 max-w-md"><Logo/></div>
        <div className="invisible sm:visible sm:flex sm:gap-4 sm:my-auto sm:pr-2 ">
          <div className="hover:text-ts_red"><a><Link href="/"><div > Home</div></Link></a></div>
        </div>
      </div>
    </header>
  );

};

export default Header;
