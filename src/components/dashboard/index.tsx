

import { useModal } from "../../modal.context"
import "./style.css"
export const Dashboard = () => {
    const { openModal } = useModal()
    const handleScroll = (link: string) => {
        const section = document.getElementById(link)
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }
    const clickButton = () => {
        handleScroll("contact")
        openModal()
    }
    return (
        <section className='dashboard_section' id="home">
            <div className='dashboard'>
                <div className="container">
                    <h1 className='dashboard_title'>Инфлюенс-маркетинг
                        который работает</h1>
                    <div className="dashboard_text">
                        <div></div>
                        <p><span>МАРИ</span> - Агентство, трансформирующее доверие лидеров мнений в измеримые бизнес-результаты для известных брендов России</p>
                    </div>
                    <div className='dashboard_click'>
                        <button className='btn btn-primary' onClick={() => clickButton()}>Оставить заявку</button>
                        <span className='dashboard_click_line'></span>
                    </div>
                </div>
            </div>
            <div className="dashboard_bacground">
            </div>
        </section>
    )
}
