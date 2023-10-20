

const UnderHero = () => {
  return (
  <div className="max-w-screen-xl px-4  mx-auto text-center  lg:px-6 "  >
            <p className="font-semibold text-purple-400 uppercase pb-4">Stats 
            </p>
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-purple-600">1250+</dt>
              <dd className="font-light text-gray-500 ">contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-purple-600">1M+</dt>
              <dd className="font-light text-gray-500 ">images</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-purple-600">20+</dt>
              <dd className="font-light text-gray-500 ">partners</dd>
          </div>
      </dl>
  </div>
  )
}

export default UnderHero