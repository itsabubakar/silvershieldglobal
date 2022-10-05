import Benefits from './_child/Benefits'

const BenefitsContainer = () => {
    return (
        <section className="m-[100px] flex flex-col items-center">
            <Benefits
                h2={'We do everything'}
                pOne={'We offer a complete, comprehensive service.'}
                pTwo={"We manage the whole process – end-to-end- to deliver a growth focused solution. From initial business concepts to ongoing operation and customer service."}
            />
            <Benefits
                h2={'Self-sustaining investment'}
                pOne={'We understand this is a significant investment for you.'}
                pTwo={'Our expert team will go the extra mile to successfully integrate your existing infrastructure, giving visibility on how you achieve a return on your investment.'}
            />
            <Benefits
                h2={'Maximizing your investment'}
                pOne={'We ensure that you only pay a minimal amount for your investment by advising you on hardware selections.'}
                pTwo={"To help you spend as little money up front as possible, we'll use all of our experience.To get closer to your long-term, sustainable goals, this also entails securing  government grant financing."}
            />
            <Benefits
                h2={'Develop new products'}
                pOne={'With access to a team of highly qualified experts with expertise in many fields, we can develop new products based on the ones your company is already making thereby creating a new stream of income for your business.'}
            />
            <Benefits
                h2={'Debt Recovery'}
                pOne={"Your chances of recovering past-due bills rise thanks to our employees' extensive experience in debt collection. While our firm has staff whose main goal is to recover debts, your main focus is probably running your business. The greatest methods to lawfully force debtors to pay are known to our qualified professionals."}
            />
        </section>
    )
}

export default BenefitsContainer