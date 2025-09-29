

import "./style.css"
// import { Bgcode } from "./bg_code"
export const Dashboard = () => {
    return (
        <section className='dashboard_section'>
            <div className='dashboard'>
                <div className="container">
                    <h1 className='dashboard_title'>Инфлюенс-маркетинг
                        который работает</h1>
                    <div className="dashboard_text">
                        <div></div>
                        <p><span>МАРИ</span> - Агентство, трансформирующее доверие лидеров мнений в измеримые бизнес-результаты для известных брендов России</p>
                    </div>
                    <div className='dashboard_click'>
                        <button className='btn btn-primary'>Оставить заявку</button>
                        <span className='dashboard_click_line'></span>
                    </div>
                    <p className='dashboard_info_text'>Для нас инфлюенс-маркетинг — это не просто коллаборации, а способ выстраивать долгосрочные отношения между брендами и людьми, формировать эмоциональную связь и создавать истории, которые хочется разделить.</p>
                </div>
            </div>
            <div className="dashboard_bacground">
                {/* <Bgcode/> */}
                <img src="/assets/bg.svg" alt="" className="dash_bg_img"/>
            </div>
        </section>
    )
}
