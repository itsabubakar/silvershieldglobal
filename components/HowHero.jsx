import Image from 'next/image'

// Images
import heroImg from '../public/images/howwework.jpg'

const HowHero = () => {
    return (
        <section className="flex xl:h-[500px] overflow-hidden">
            <div className='mt-[100px] mx-5 xl:mx-0 xl:ml-[100px] w-full xl:w-1/2'>
                <h2 className='text-center text-hxl text-dark-header'>How we work</h2>
                <h2 className='text-center text-hxl xl:ml-[50px] text-dark-header'>to upscale your company</h2>
                <p className='xl:max-w-[600px] border-l-4 pl-4 border-silver-bg text-lg mt-6 sm:text-center'>How we collaborate with companies to seek financing, manage the business, and generate sustainable profit streams.</p>

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

export default HowHero