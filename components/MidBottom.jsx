import Image from "next/image"
import sectionImg from '../public/images/section--two.jpg'

// const MidBottom = () => {
//     return (
//         <section className="mt-12 flex overflow-x-hidden items-center justify-between">
//             <div className='relative bg-silver-bg w-[15%] h-[430px] overflow-x-hidden'>
//                 <div className='mt-[50px] absolute -left-[380px] w-[500px]'>
//                     <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
//                 </div>
//             </div>

//             <div className="w-[60%] max-w-[500px]">
//                 <h2 className="text-3xl mb-3">Expand your business to a worldwide<br></br> scale</h2>
//                 <p className="text-lg">We help enterprises in taking their projects to the worldwide market. We also partner with other appropriate institutions to get finance for your business.</p>
//             </div>

//             <div className='relative bg-silver-bg w-[20%] h-[430px]'>
//                 <div className='mt-[50px] absolute -left-[50px] w-[500px]'>
//                     <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
//                 </div>
//             </div>

//         </section >
//     )
// }

// export default MidBottom

// import Image from "next/image"
// import sectionImg from '../public/images/section--two.jpg'

const MidBottom = () => {
    return (
        <section className="mt-12 flex flex-col xl:flex-row overflow-x-hidden items-center justify-between">
            <div className='relative bg-silver-bg xl:w-[15%] xl:h-[430px] overflow-x-hidden'>
                <div className='mt-[50px] pb-12 xl:absolute left-[-380px] xl:w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>

            <div className="mx-5 my-20 xl:w-[60%] max-w-[500px]">
                <h2 className="text-3xl mb-3">Expand your business to a worldwide
                    scale<br></br>scale</h2>
                <p className="text-lg">We help enterprises in taking their projects to the worldwide market. We also partner with other appropriate institutions to get finance for your business.</p>
            </div>

            <div className='hidden xl:block relative bg-silver-bg xl:w-[20%] xl:h-[430px]'>
                <div className=' mt-[50px] xl:absolute -left-[120px] xl:w-[500px]'>
                    <Image src={sectionImg} alt="" srcSet="" width={600} height={400} />
                </div>
            </div>

        </section >
    )
}

export default MidBottom