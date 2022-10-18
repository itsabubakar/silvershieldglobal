const AboutText = ({ text, bg, h2 }) => {
    return (
        <section className={`${bg ? 'flex justify-center bg-[#F2F2F2]' : 'flex justify-center bg-[#ffffff]'}`}>
            <div className="mx-5 md:mx-0 max-w-[700px] py-[100px]">
                {h2 && <h2 className="text-3xl text-center mb-[22px]">{h2}</h2>}
                {text.map((text, index) => (
                    <p key={index} className="pb-5 text-lg">{text}</p>
                ))}
            </div>
        </section>
    )
}

export default AboutText