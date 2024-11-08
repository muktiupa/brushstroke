import React from 'react';
import Reglogin from './Reglogin'; // Make sure to import Reglogin if it's in a separate file
import Usericon from './Usericon';

function Userbtn({ fristName = <Reglogin /> ,  usericon=<Usericon/>}) {
  return (
    <div>
      <button
        type="button"
        className="text-white  bg-[#24292F] rounded-full w-auto flex justify-between items-center "
      >
        <div className='w-8 h-8 flex justify-center items-center  rounded-full overflow-hidden bg-[#24292F]'>
        {usericon}
        </div>
       
        <span className="px-1">{fristName}</span>
      </button>
       
    </div>
  );
}

export default Userbtn;
