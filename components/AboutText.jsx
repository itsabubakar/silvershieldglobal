const AboutText = ({ text, bg, h2 }) => {
    console.log(h2);
    return (
        <section className={`${bg ? 'flex justify-center bg-[#F2F2F2]' : 'flex justify-center bg-[#ffffff]'}`}>
            <div className="max-w-[700px] py-[100px]">
                {h2 && <h2 className="text-3xl text-center mb-[22px]">{h2}</h2>}
                {text.map((text) => (
                    <p className="pb-5 text-lg">{text}</p>
                ))}
            </div>
        </section>
    )
}

export default AboutText