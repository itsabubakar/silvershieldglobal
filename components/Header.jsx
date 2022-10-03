import Link from "next/link"

const Header = () => {
    return (
        <header className="flex mx-[100px] items-center py-5 raleway">
            <div className="text-silver-accent">
                <div className="pr-[180px] text-[32px] ">Silver<span className="text-orange-accent">Shield</span></div>
                <div className="text-base -mt-2">Global Services Limited</div>
            </div>

            <nav className="grow">
                <ul className="flex gap-x-[50px] grow fw-600">
                    <li><Link href={'/'}><a className="text-orange-accent">Home</a></Link></li>
                    <li><Link href={'/'}><a className="hover:text-orange-accent">About us</a></Link></li>
                    <li><Link href={'/'}><a className="hover:text-orange-accent">How we work</a></Link></li>
                    <li><Link href={'/'}><a className="hover:text-orange-accent">Benefits</a></Link></li>
                    <li className="ml-auto"><Link href={'/'}><a className="transition duration-300 ease-in-out rounded border-2 border-dark-header p-2 hover:border-2 hover:bg-white hover:border-gray-300">Contact us</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header