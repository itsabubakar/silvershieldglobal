import Image from 'next/image'

// Images
import heroImg from '../public/images/hero--img.jpg'

const Hero = () => {
    return (
        <section className="flex xl:h-[500px] overflow-hidden">
            <div className='mt-[100px] mx-5 xl:mx-0 xl:ml-[100px] w-full xl:w-1/2'>
                <h2 className='text-center text-hxl text-dark-header'>Providing solutions</h2>
                <h2 className='text-center text-hxl xl:ml-[50px] text-dark-header'>to your investment goals</h2>
                <p className='xl:max-w-[600px] border-l-4 pl-4 border-silver-bg text-lg mt-6'>With a team of experts in developing business concepts, business development and projections, we partner with businesses to source investments, manage the business and build sustainable profit streams. </p>
                <button className='transition duration-300 ease-in-out border-2 border-dark-header text-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300 text-2xl rounded mt-[30px] ml-6 hover:text-orange-accent'>Join Us</button>
            </div>

            <div className='hidden w-1/2 xl:flex justify-end  relative'>
                <div className='relative bg-silver-bg w-[360px] h-[321px]'>
                    <div className='mt-[100px] absolute -left-[210px] w-[600px]'>
                        <Image src={heroImg} alt="" srcSet="" width={600} height={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero