const Benefits = ({ h2, pOne, pTwo }) => {
    return (
        <div className="border-l-4 border-blue-accent pl-12 max-w-[700px] mb-16">
            <h2 className="text-2xl mb-4 font-medium">{h2}</h2>
            <p className="mb-2">{pOne}</p>
            <p>
                {pTwo && pTwo}
            </p>
        </div>
    )
}

export default Benefits