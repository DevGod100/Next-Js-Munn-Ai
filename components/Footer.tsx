import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-20">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-purple-600 px-2 py-1 text-xl font-semibold transition-all hover:-translate-y-[2px] md:block dark:border-white">
              billion
              <span className="text-white bg-purple-500 p-1 rounded-md">
                Pic
              </span>
            </p>
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">1M+ AI generated Stock images.  Upload your MidJourney images & earn money!</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
           {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li> */}
          <li>
              <p className="mr-4  md:mr-6">Contact <span className='underline text-blue-700'>hello@billionpic.com</span></p>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 BillionPic™. All Rights Reserved. <Link href={'/terms'} className='underline text-blue-700'>Terms</Link></span>
  </div>
</footer>
  )
}

export default Footer