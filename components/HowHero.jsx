import Image from 'next/image'

// Images
import heroImg from '../public/images/howwework.jpg'

const HowHero = () => {
    return (
        <section className="flex h-[500px] overflow-hidden">
            <div className='mt-[100px] ml-[100px] w-1/2'>
                <h2 className='text-hxl text-dark-header'>How we work</h2>
                <h2 className='text-hxl ml-[50px] text-dark-header'>to upscale your company</h2>
                <p className='max-w-[600px] border-l-4 pl-4 border-silver-bg text-lg mt-6'>How we collaborate with companies to seek financing, manage the business, and generate sustainable profit streams</p>

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

export default HowHero