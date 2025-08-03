import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300  flex justify-between items-center flex-wrap gap-5'>
      <div className='text-white-500 w-90 flex gap-5 items-center justify-center mx-auto'>
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        <div className='flex gap-3'>
          <div className='social-icon'>
            <img
              src='/assets/github.svg'
              alt='github logo'
              className='w-1/2 h-1/2'
            />
          </div>

          <div className='social-icon'>
            <img
              src='/assets/twitter.svg'
              alt='twitter logo'
              className='w-1/2 h-1/2'
            />
          </div>

          <div className='social-icon'>
            <img
              src='/assets/instagram.svg'
              alt='insta logo'
              className='w-1/2 h-1/2'
            />
          </div>
        </div>

        <p className='text-white-500'>© | Hiba Azhar | All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer
