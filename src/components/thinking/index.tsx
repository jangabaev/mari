// @ts-ignore
import Slider from "react-slick";
import "./style.css"

const data = [{
    id: 1,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 2,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 3,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 4,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 5,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 6,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}, {
    id: 7,
    name: "Василий пупкинский",
    life: "Лайфстайл",
    followers: "332к подписчиков",
    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-17/CX9HT7jpQt.png"
}]

export const ClientThink = () => {
    const settings = {
        className: "center", centerPadding: "60px",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="cilents complex">
            <div className="container">
                <div className="complex_title cilent_title">
                    <h3>более <span className='cilent_title_green'>10000 селебрити</span> суммарной аудиторией более <span className='cilent_title_blue'>100000 млн подписчиков </span></h3>
                    <p>соединяет бренды и блогеров,
                        закрывая задачи на 360° в инфлюенс-маркетинге
                    </p>
                </div>
                <div className="cilent_buttons">
                    <button className='cilent_buttons_btn btn'>Уникальный креатив</button>
                    <button className='cilent_buttons_btn btn'> Эксклюзивные блогеры</button>
                </div>
                <Slider {...settings}>{
                    data.map((el => <div className="slider_cards" key={el.id}>
                        <div className="slider_card">
                            <div className="slider_card_top">
                                <div className="slider_card_top_img">
                                    <img src={el.img} alt="" />
                                </div>
                                <h4>{el.name}</h4>
                            </div>
                            <div className="slider_card_bottom">
                                <div className='slider_card_bottom_line'></div>
                                <p className='slider_card_bottom_life'>{el.life}</p>
                                <p className='slider_card_bottom_followers'>{el.followers}</p>
                            </div>
                        </div>
                    </div>))}
                </Slider>
                <div className="cilent_bottom_buttons">
                    <button className='btn btn-primary'>Хочу запустить кампанию</button>
                    <button className='btn btn-secondary'>Хочу стать блогером МАРИ</button>
                </div>
            </div>
        </section>
    )
}
