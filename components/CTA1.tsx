import React from 'react'
import SignInButton from './SignInButton'

const CTA1 = () => {
  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <img className="w-full " src={'manyimags.png'} alt="dashboard image" />
    <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Become a Contributor!</h2> 
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Your Midjourney images will have a profound impact as they are shared and used across the world, inspiring people from all walks of life.</p>
          <SignInButton text='Get started →' className='className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"'/>
          
    </div>
    </div>
  )
}

export default CTA1




// Let's make stock ai images more accesible