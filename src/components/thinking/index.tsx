import { useEffect, useState } from "react";
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
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const settings = {
        className: "center",
        centerPadding: "60px",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: width < 600 ? 1 : width < 1000 ? 2 : width < 1400 ? 3 : 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1000,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <section className="cilents complex" id="bloger">
            {/* <div className="container">
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
            </div> */}
        </section>
    )
}
