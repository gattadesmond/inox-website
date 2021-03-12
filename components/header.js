import { memo } from 'react';
import cn from 'classnames';

import NavBar from './navbar';

const Header = ({ sticky = true }) => {
  return (
    <>
      <header className={cn({ sticky })}>
        <NavBar />
      </header>

      <style jsx>{`
        header {
   
        }
        header.sticky {
          {/* position: sticky;
          top: 0; */}
        }
      `}</style>
    </>
  );
};

export default memo(Header);
