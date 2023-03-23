import React from 'react';

const DownloadeBtn = () => {

    const handlePrint=() =>{
       window.print()
    };

  return (
    <div className='text-end mt-5'>
        <button className='btn btn-primary btn-md' onClick={handlePrint}>Print Resume</button>
    </div>
  )
}

export default DownloadeBtn;