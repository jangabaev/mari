import AnimatedLogo from './background'
import "./style.css"

const pages = [
    { name: "О нас", link: "home" },
    { name: "Услуги", link: "about" },
    { name: "Специализация", link: "statstika" },
    { name: "Блогеры", link: "bloger" },
    { name: "Контакты", link: "contact" }
]
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <p className="footer-copyright">© 2025 ООО "МАРИ"</p>
                        <div className="footer-contact">
                            <a href='tel:+79166762266'>+7 (916) 676 - 22 - 66</a>
                            <a href='https://t.me/Reklama_Elena'>hello@mari.ru</a>
                        </div>
                    </div>
                    <div className='footer_items'>
                        <div className="footer-center">
                            <nav className="footer-nav">
                                {
                                    pages.map((el)=><a href={`#${el.link}`}>{el.name}</a>)
                                }
                            </nav>
                            <a href="/politika.pdf" target="_blank" rel="noopener noreferrer" className="footer-legal">Политика конфиденциальности</a>
                        </div>
                        <div className="footer-right">
                            <div className="footer-social">
                                <a href="https://t.me/Reklama_Elena" className="footer-social-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <path d="M45.7002 10.7707L39.3877 40.3227C38.9168 42.404 37.7085 42.8727 35.9627 41.9332L26.4939 34.9498L21.8585 39.3811C21.3897 39.8519 20.9189 40.3227 19.8439 40.3227L20.5835 30.5832L38.246 14.5332C38.9835 13.7936 38.0439 13.5248 37.1043 14.1311L15.1439 27.9644L5.67308 25.0769C3.59183 24.4061 3.59183 22.9936 6.14391 22.0561L42.946 7.74983C44.7585 7.21233 46.3043 8.15399 45.7002 10.7707Z" fill="#3B82F6" />
                                    </svg>
                                </a>
                                <a href="#" className="footer-social-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="31" viewBox="0 0 54 31" fill="none">
                                        <path d="M3 28L25.5858 5.41421C26.3668 4.63317 27.6332 4.63317 28.4142 5.41421L51 28" stroke="url(#paint0_linear_130_750)" stroke-width="8" />
                                        <defs>
                                            <linearGradient id="paint0_linear_130_750" x1="27" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#676767" />
                                                <stop offset="1" stop-color="#676767" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bg">
                <div className="footer-bg_img">
                    <AnimatedLogo />
                </div>
            </div>
        </footer>
    )
}
