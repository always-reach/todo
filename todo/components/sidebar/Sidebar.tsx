import * as React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div
      className={`transform top-[10vh] left-0 w-[20vh] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0`}
      style={{ backgroundColor: '#e6e6e6' }}
    >
      <div className='px-6 py-4'>
        <nav>
          <ul className='mt-4'>
            <li className='mb-1'>
              <a href='#' className='flex text-gray-800 hover:text-white'>
                <span>今日の予定</span>
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='flex text-gray-800 hover:text-white'>
                <span>Todo一覧</span>
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='flex text-gray-800 hover:text-white'>
                <span>新しいリスト</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
