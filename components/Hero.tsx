import Link from "next/link";

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
         <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        
        <span className="bg-gradient-to-r from-yellow-500 via-white to-blue-800 text-transparent bg-clip-text">
          The Future of Anonymous {" "}
          Incident Reporting
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Take control and report incidents securely, with 100% anonymity. Whether it's a safety issue, a workplace concern, or an event needing attention, our cutting-edge app simplifies the reporting process for you. Stay protected while making a difference.
      </p>
    <div className="flex justify-center my-10">
    <Link href="/send-report" className="py-3 px-3 rounded-md bg-gradient-to-r hover:from-yellow-400 hover:via-gray-600 hover:to-blue-500 from-yellow-800 via-black to-blue-600">
      Send Report
    </Link>
    <a href="/track-report" className="py-3 px-4 mx-3 rounded-md border hover:bg-white hover:text-black">
      Track Report
    </a>
    </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-800 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={'/video1.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={'/video2.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  )
}

export default Hero;