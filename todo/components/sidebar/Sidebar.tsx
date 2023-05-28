import * as React from 'react';

type SidebarProps = {
  open: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const sidebarClass = `transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
    open ? 'translate-x-0' : '-translate-x-full'
  }`;

  return (
    <div className={sidebarClass} style={{ backgroundColor: '#3b4252' }}>
      <div className='px-6 py-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-white'>Sidebar</h2>
        </div>
        <nav>
          <ul className='mt-4'>
            <li className='mb-1'>
              <a href='#' className='flex text-gray-300 hover:text-white'>
                <span>Item 1</span>
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='flex text-gray-300 hover:text-white'>
                <span>Item 2</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
