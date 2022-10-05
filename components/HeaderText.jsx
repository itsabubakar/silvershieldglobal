const HeaderText = ({ h2, p }) => {
    return (
        <section className="m-[100px]">
            <h2 className="text-[28px] mb-[50px] font-bold">{h2}</h2>
            <p className="text-center text-xl font-medium">{p}</p>
        </section>
    )
}

export default HeaderText