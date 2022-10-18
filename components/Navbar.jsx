import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false)

    return (
        <div className={nav ? "px-5 sm:px-[60px] py-5 raleway relative left-0 top-0 w-full z-10 ease-in-out duration-100" : "px-5 sm:px-[60px] py-5 raleway relative left-0 top-0 w-full z-10 ease-in-out duration-100"}>
            <div className="flex items-center justify-between sm:justify-center pb-1">
                <div className="text-silver-accent">
                    <div className="sm:pr-[180px] text-[32px] ">Silver<span className="text-orange-accent">Shield</span></div>
                    <div className="text-base -mt-2">Global Services Limited</div>
                </div>

                <ol className="fw-600 grow hidden xl:flex pl-10 gap-x-10 items-center text-black link-hover">
                    <li><Link href={'/'}><a className={router.pathname == "/" ? "text-orange-accent" : "hover:text-orange-accent"}>Home</a></Link></li>
                    <li><Link href={'/About'}><a className={router.pathname == "/About" ? "text-orange-accent" : "hover:text-orange-accent"}>About us</a></Link></li>
                    <li><Link href={'/How'}><a className={router.pathname == "/How" ? "text-orange-accent" : "hover:text-orange-accent"}>How we work</a></Link></li>
                    <li><Link href={'/Benefits'}><a className={router.pathname == "/Benefits" ? "text-orange-accent" : "hover:text-orange-accent"}>Benefits</a></Link></li>
                    <li className="ml-auto"><Link href={'/Contact'}><a className={router.pathname == "/Contact" ? "text-orange-accent transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300" : "transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300 hover:text-orange-accent"}>Contact us</a></Link></li>
                </ol>

                <div className='z-30 xl:hidden' onClick={() => setNav(!nav)}>
                    {nav ? '' : <AiOutlineMenu size={40} className="text-Moody-blue border-4 rounded-full p-1" />}
                </div>

                {/* Mobile Menu */}

                <div className={nav ? "fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen bg-white  pt-[50px] ease-in-out duration-100" : 'hidden top-0 left-[100%] right-0 bottom-0 flex-col items-center w-full h-screen bg-white  pt-[50px] ease-in-out duration-100'}>
                    <div className='mb-4 ml-auto mr-[30px]' onClick={() => setNav(!nav)}>
                        <AiOutlineClose size={40} className="text-Moody-blue border-4 rounded-full p-1" />
                    </div>

                    <ol className="fw-600 flex flex-col gap-y-5 items-center uppercase text-gray-700 link-hover">
                        <li><Link href={'/'}><a className={router.pathname == "/" ? "text-orange-accent" : ""}>Home</a></Link></li>
                        <li><Link href={'/About'}><a className={router.pathname == "/About" ? "text-orange-accent" : ""}>About us</a></Link></li>
                        <li><Link href={'/How'}><a className={router.pathname == "/How" ? "text-orange-accent" : ""}>How we work</a></Link></li>
                        <li><Link href={'/Benefits'}><a className={router.pathname == "/Benefits" ? "text-orange-accent" : ""}>Benefits</a></Link></li>
                        <li className="mt-5"><Link href={'/Contact'}><a className={router.pathname == "/Contact" ? "text-orange-accent transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300" : "transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300 hover:text-orange-accent"}>Contact us</a></Link></li>
                    </ol>
                </div>

            </div>

        </div>


    )
}

export default Navbar