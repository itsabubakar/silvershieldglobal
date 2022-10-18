import Image from "next/image"
import sectionImg from '../public/images/section--one.jpg'

const Mid = () => {
    return (
        <section className="mt-12 flex flex-col xl:flex-row overflow-x-hidden items-center justify-between">
            <div className='relative bg-silver-bg xl:w-[25%] pb-12 xl:h-[430px]'>
                <div className='mt-[50px] xl:absolute -left-[120px] xl:w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>
            <div className="mx-5 my-20 xl:w-[60%] max-w-[500px]">
                <h2 className="text-3xl mb-3">Grow your business to a global<br></br> level</h2>
                <p className="text-lg">We help companies take their projects to the global market. We also work with other relevant institution to secure funding for your company</p>
            </div>
            <div className='hidden xl:block relative bg-silver-bg xl:w-[15%] xl:h-[430px] overflow-x-hidden'>
                <div className='mt-[50px] pb-12 xl:absolute left-[50px] xl:w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>
        </section>
    )
}

export default Mid