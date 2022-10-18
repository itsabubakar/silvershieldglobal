const HowText = () => {
    return (
        <section className=" bg-[#F2F2F2] my-20">
            <h2 className="text-center mb-[50px] text-3xl pt-20 xl:px-[60px]">How We Work</h2>
            <div className="flex flex-wrap mx-5 xl:mx-0 gap-24 justify-center mb-12">
                <div className="max-w-[450px]">
                    <h2 className="border-blue-accent border-l-4 pl-4 text-2xl mb-5">Consultancy</h2>
                    <p className="mb-2">We listen to your objectives to understand exactly what you and your company needs.</p>
                    <p className="mb-2">We take the time at the beginning to thoroughly grasp your ultimate goals and then use our knowledge and experience to help you navigate the process.</p>
                    <p className="mb-2">In every situation, we will base our recommendations on learning about your goals and developing a thorough understanding of the setting and how the new concepts will be implemented.</p>
                </div>
                <div className="max-w-[450px]">
                    <h2 className="border-blue-accent border-l-4 pl-4 text-2xl mb-5">Management</h2>
                    <p className="mb-3">We guarantee a perceptive, technological, and financially viable solution that fits your particular set of circumstances.</p>
                    <p className="mb-3">We offer a complete end-to-end and comprehensive service package.</p>
                    <p className="mb-3">Our experts have the expertise and experience to create specifications that make use of cutting-edge technologies. By keeping as many of the tasks in-house and using our own staff as much as possible, we are able to manage the potential difficulties of planning a large-scale project.</p>
                </div>
            </div>
            <div className="flex flex-wrap mx-5 xl:mx-0 gap-24 justify-center">
                <div className="max-w-[450px]">
                    <h2 className="border-blue-accent border-l-4 pl-4 text-2xl mb-5">Fund Source</h2>
                    <p className="mb-3">We can source the funds needed to upscaling of your company.</p>
                    <p className="mb-3">We can also access to grants that your company could be eligible for.</p>
                </div>
                <div className="max-w-[450px]">
                    <h2 className="border-blue-accent border-l-4 pl-4 text-2xl mb-5">Expansion</h2>
                    <p className="mb-3">We can grow the size of its business through generating more funding, partnerships, and offering premium management services.</p>
                    <p className="mb-3">We can successfully grow the scale of operations. Thus, generating more company for your company.</p>
                </div>
            </div>
        </section>
    )
}

export default HowText