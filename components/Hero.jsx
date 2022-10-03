import Image from 'next/image'
import Head from 'next/head'

// Images
import heroImg from '../public/images/hero--img.jpg'

const Hero = () => {
    return (
        <section className="flex h-[500px] overflow-hidden">
            <div className='mt-[100px] ml-[100px] w-1/2'>
                <h2 className='text-hxl text-dark-header'>Providing solutions</h2>
                <h2 className='text-hxl ml-[50px] text-dark-header'>to your investment goals</h2>
                <p className='max-w-[600px] border-l-4 pl-4 border-silver-bg text-lg mt-6'>With a team of experts in developing business concepts, business development and projections, we partner with businesses to source investments, manage the business and build sustainable profit streams. </p>
                <button className='transition duration-300 ease-in-out border-2 border-dark-header text-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300 text-2xl rounded mt-[30px] ml-6 hover:text-black'>Join Us</button>
            </div>
            <div className='w-1/2 flex justify-end  relative'>
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