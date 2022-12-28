import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const ReactQuery = () => {
  return (
    <>
      <div className='rqpages'>
        <div className='rqmain'>
          <p>
            Tutorial on react query, showing comparism between fetching data the
            normal way and with react query
          </p>
          <div className='rqbuttons'>
            <Link to='superheroes'>
              <button>Normal Fetching</button>
            </Link>
            <Link to='rqsuperheroes'>
              <button>Fetching with RQ</button>
            </Link>
          </div>
        </div>
        <div className='rqhr' ></div>
        <Outlet />
      </div>
    </>
  );
};
