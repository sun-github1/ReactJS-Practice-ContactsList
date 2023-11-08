import React from 'react';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <>
            <div className='flex items-start'>
                <img src={logo}
                    style={{ height: '50px' }}

                    alt="logo" />
                <span className='h1 self-center'>Contact-O-Pedia</span>
            </div>
            <hr className="w-full h-px mt-1 mb-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </>
    )
}

export default Header