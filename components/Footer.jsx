import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-footer-bg px-[100px] py-12">
            <div className="flex flex-col items-center sm:flex-row gap-x-32 gap-y-5">
                <div className="text-white">
                    <div className="text-[32px] ">Silver<span className="text-orange-accent">Shield</span></div>
                    <div className="text-base -mt-2">Global Services Limited</div>
                </div>
                <div className="order-2 sm:order-1 text-center sm:text-center ml-0 sm:ml-auto text-white">
                    <h2 className="text-2xl mb-4">Contact us</h2>
                    <ol>
                        <li className="mb-2">
                            7 Rabah Road
                        </li>
                        <li className="mb-2">
                            Malali
                        </li>
                        <li className="mb-2">
                            Kaduna
                        </li>
                        <li className="mb-2">
                            +234 80 000 000
                        </li>
                    </ol>
                </div>
                <div className="text-white order-1 text-center sm:text-center sm:order-2">
                    <h2 className="text-2xl mb-4">Useful links</h2>
                    <ol>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href={'/'}><a>Home</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href={'About'}><a>About us</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href={'How'}><a>How we work</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href={'Benefits'}><a>Benefits</a></Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="text-[#CBCBCB] text-center sm:text-left flex flex-col sm:flex-row gap-x-32 mt-24">
                <div className="">
                    <p>© 2022 Silver Shield Global. All rights reserved.</p>
                </div>
                <div className="  sm:ml-auto">
                    <Link href="#"><a className="hover:text-white">Terms &amp; Condition</a></Link>
                </div>
                <div className="sm:mr-16">
                    <Link href="#"><a className="hover:text-white">Privacy</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer