import Link from 'next/link';

const Header: React.FC = () => (
  <nav
    className={`fixed top-0 z-10 flex items-center justify-between flex-wrap bg-teal-500 p-6 transition-all duration-300 ease-in-out w-full`}
    style={{ height: '10vh' }}
  >
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>
        <Link href='/'>TODO</Link>
      </span>
    </div>
  </nav>
);

export default Header;
