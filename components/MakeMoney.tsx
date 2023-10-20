const MakeMoney = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-20">
    <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Contribute to earn <span className="font-extrabold text-purple-700">25%</span> of BillionPic's profits!</h2>
        <p className="mb-4 font-light">As a contributor, you'll receive a portion of the profits—25% to be exact—from the images used through our extensive network of partners. Your content can now pay you back! </p>
        <a href="/terms" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
            Terms of service
            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
    </div>
  )
}

export default MakeMoney