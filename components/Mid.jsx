import Image from "next/image"
import sectionImg from '../public/images/section--one.jpg'

const Mid = () => {
    return (
        <section className="mt-12 flex overflow-x-hidden items-center justify-between">
            <div className='relative bg-silver-bg w-[25%] h-[430px]'>
                <div className='mt-[50px] absolute -left-[120px] w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>
            <div className="w-[60%] max-w-[500px]">
                <h2 className="text-3xl mb-3">Grow your business to a global<br></br> level</h2>
                <p className="text-lg">We help companies take their projects to the global market. We also work with other relevant institution to secure funding for your company</p>
            </div>
            <div className='relative bg-silver-bg w-[15%] h-[430px] overflow-x-hidden'>
                <div className='mt-[50px] absolute left-[50px] w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>
        </section>
    )
}

export default Mid