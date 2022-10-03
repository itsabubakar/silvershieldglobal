import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-footer-bg px-[100px] py-12">
            <div className="flex gap-x-32">
                <div className="text-white">
                    <div className="text-[32px] ">Silver<span className="text-orange-accent">Shield</span></div>
                    <div className="text-base -mt-2">Global Services Limited</div>
                </div>
                <div className="ml-auto text-white">
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
                <div className="text-white">
                    <h2 className="text-2xl mb-4">Useful links</h2>
                    <ol>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href="#"><a>Home</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href="#"><a>About us</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href="#"><a>How we work</a></Link>
                        </li>
                        <li className="mb-2 hover:text-gray-300">
                            <Link href="#"><a>Benefits</a></Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="text-[#CBCBCB] flex gap-x-32 mt-24">
                <div className="">
                    <p>© 2022 Silver Shield Global. All rights reserved.</p>
                </div>
                <div className="ml-auto">
                    <Link href="#"><a className="hover:text-white">Terms &amp; Condition</a></Link>
                </div>
                <div className="mr-16">
                    <Link href="#"><a className="hover:text-white">Privacy</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer