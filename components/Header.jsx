import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className="flex mx-[100px] items-center py-5 raleway">
            <div className="text-silver-accent">
                <div className="pr-[180px] text-[32px] ">Silver<span className="text-orange-accent">Shield</span></div>
                <div className="text-base -mt-2">Global Services Limited</div>
            </div>

            <nav className="grow">
                <ul className="flex gap-x-[50px] grow fw-600">
                    <li><Link href={'/'}><a className={router.pathname == "/" ? "text-orange-accent" : ""}>Home</a></Link></li>
                    <li><Link href={'/About'}><a className={router.pathname == "/About" ? "text-orange-accent" : ""}>About</a></Link></li>
                    <li><Link href={'/How'}><a className={router.pathname == "/How" ? "text-orange-accent" : ""}>How we work</a></Link></li>
                    <li><Link href={'/Benefits'}><a className={router.pathname == "/Benefits" ? "text-orange-accent" : ""}>Benefits</a></Link></li>
                    <li className="ml-auto"><Link href={'/Contact'}><a className={router.pathname == "/Contact" ? "text-orange-accent transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300" : "transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300 hover:text-orange-accent"}>Contact us</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header