import ContactInfo from "../components/ContactInfo"
import HeaderText from "../components/HeaderText"
import Format from "../layout/Format"

const Contact = () => {
    return (
        <Format title={'- Contact'}>
            <HeaderText h2={'Contact Us'} p={'Any inquiries you may have or discussions regarding how we might collaborate are both welcome!'} />
            <ContactInfo />
        </Format>
    )
}

export default Contact