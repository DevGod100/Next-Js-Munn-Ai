import React from 'react'

const CTA2 = () => {
  return (
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-20">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Display your Images across the world</h2>
        <p className="mb-4">Witness your creations resonate across a multitude of platforms. Your images will be harnessed for branding, advertising, and storytelling through our extensive partnerships. With the potential to impact countless lives, your images will become a catalyst for visual narratives in various contexts.</p>
        <p>Join us, and let your images spark change in the world of creativity.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src={'1.png'} alt="office content 1" />
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={'2.png'} alt="office content 2" />
    </div>
</div>
  )
}

export default CTA2