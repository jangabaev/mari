import { BackgroundCircle } from "../advertising/bacground/circle"
import "./style.css"

const data = [
  {
    id: 1,
    name: "Инфлюенс маркетинг",
    text: "Подбор, запуск, аналитика кампаний "
  },
  {
    id: 2,
    name: "Ведение брендов ",
    text: "Полный цикл: от контента до комьюнити"
  },
  {
    id: 3,
    name: "Продакшен ",
    text: "Съёмка контента для брендов"
  },

  {
    id: 4,
    name: "Стратегия",
    text: "Разработка креативных концепций "
  }
]
export const ComplexMarketing = () => {
  return (
    <main className="main">
      <section className="brand">
        <div className="container">
          <div className="brand_title">
            <h3>Мы строим мост между<span> брендами</span> и аудиторией</h3>
          </div>
          <div className="brand_cards">{
            data.map((el) =>
              <div className="brand_card" key={el.id}>
                <div className="brand_card_top">
                  <h5>{el.name}</h5>
                </div>
                <div className="brand_card_bottom">
                  <div className="brand_card_line"></div>
                  <p>{el.text}</p>
                </div>
              </div>)
          }
          </div>
          <div className='brand_bottom'>
            <button className='brand_bottom_button btn btn-secondary'>Оставить заявку</button>
            <span className='dashboard_click_line brand_bottom_line'></span>
          </div>
        </div>
      </section>

      <div className="brand_cirle">
        <div className="brand_cirle_bg">
          <BackgroundCircle className="black" />
        </div>
      </div>

      <section className="complex">
        <div className="container">
          <h1 className="complex_title">
            КОМПЛЕКСНЫЙ СПЕКТР{" "}
            <span>ИНФЛЮЕНС</span>-МАРКЕТИНГА
          </h1>

          <div className="complex_cards">
            <div className="complex_card">
              <div className="complex_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M68.75 34.375H87.5M68.75 46.875H87.5M68.75 21.875H87.5M15.625 87.5V84.375C15.625 77.7446 18.2589 71.3857 22.9473 66.6973C27.6357 62.0089 33.9946 59.375 40.625 59.375H46.875C53.5054 59.375 59.8643 62.0089 64.5527 66.6973C69.2411 71.3857 71.875 77.7446 71.875 84.375V87.5M59.375 31.25C59.375 35.394 57.7288 39.3683 54.7985 42.2985C51.8683 45.2288 47.894 46.875 43.75 46.875C39.606 46.875 35.6317 45.2288 32.7015 42.2985C29.7712 39.3683 28.125 35.394 28.125 31.25C28.125 27.106 29.7712 23.1317 32.7015 20.2015C35.6317 17.2712 39.606 15.625 43.75 15.625C47.894 15.625 51.8683 17.2712 54.7985 20.2015C57.7288 23.1317 59.375 27.106 59.375 31.25Z" stroke="#A3E635" stroke-width="2" stroke-linejoin="round" />
              </svg></div>
              <div className="complex_card_content">
                <h3>ПОДБОР БЛОГЕРОВ С УЧЁТОМ АУДИТОРИИ</h3>
                <p>
                  Подбор блогеров с учётом аудитории, уровня вовлечённости,
                  тематики контента и истории сотрудничества для релевантности
                  продвижения.
                </p>
              </div>
            </div>

            <div className="complex_card">
              <div className="complex_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M29.1666 46.8752C38.9466 46.8752 46.8749 38.9469 46.8749 29.1668C46.8749 19.3868 38.9466 11.4585 29.1666 11.4585C19.3865 11.4585 11.4583 19.3868 11.4583 29.1668C11.4583 38.9469 19.3865 46.8752 29.1666 46.8752Z" stroke="#A3E635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M70.8333 88.5417C80.6134 88.5417 88.5417 80.6134 88.5417 70.8333C88.5417 61.0533 80.6134 53.125 70.8333 53.125C61.0533 53.125 53.125 61.0533 53.125 70.8333C53.125 80.6134 61.0533 88.5417 70.8333 88.5417Z" stroke="#A3E635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M40.6249 53.125H17.7083C14.2565 53.125 11.4583 55.9232 11.4583 59.375V82.2917C11.4583 85.7435 14.2565 88.5417 17.7083 88.5417H40.6249C44.0767 88.5417 46.8749 85.7435 46.8749 82.2917V59.375C46.8749 55.9232 44.0767 53.125 40.6249 53.125Z" stroke="#A3E635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M67.3105 13.5416L53.8605 36.8375C53.4948 37.4709 53.3023 38.1894 53.3022 38.9208C53.3022 39.6522 53.4948 40.3707 53.8604 41.0041C54.2261 41.6375 54.7521 42.1635 55.3855 42.5292C56.0189 42.8949 56.7374 43.0875 57.4688 43.0875H84.3688C85.1002 43.0875 85.8187 42.8949 86.4521 42.5292C87.0855 42.1635 87.6115 41.6375 87.9772 41.0041C88.3429 40.3707 88.5354 39.6522 88.5354 38.9208C88.5354 38.1894 88.3428 37.4709 87.9771 36.8375L74.5271 13.5416C74.1614 12.9083 73.6354 12.3823 73.002 12.0167C72.3687 11.651 71.6502 11.4585 70.9188 11.4585C70.1874 11.4585 69.469 11.651 68.8356 12.0167C68.2022 12.3823 67.6762 12.9083 67.3105 13.5416Z" stroke="#A3E635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
              <div className="complex_card_content">
                <h3>РАЗРАБОТКА ИНДИВИДУАЛЬНЫХ СТРАТЕГИЙ</h3>
                <p>
                  Разработка индивидуальных стратегий и создание
                  высококачественного фото и видеоконтента для различных каналов
                  коммуникации.
                </p>
              </div>
            </div>

            <div className="complex_card">
              <div className="complex_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M31 35H72M31 48H72" stroke="#A3E635" stroke-width="2" />
                  <path d="M18.333 13H81.667C83.1269 13.0001 84.5017 13.4989 85.4941 14.3496C86.4818 15.1963 87 16.3084 87 17.4287V52.7158C87.0071 57.9135 85.3627 63.027 82.2256 67.5088C79.087 71.9925 74.5697 75.6782 69.1426 78.1523H69.1416L50 86.9004L30.8584 78.1523H30.8574C25.4303 75.6782 20.913 71.9925 17.7744 67.5088C14.6373 63.027 12.9929 57.9135 13 52.7158V17.4287C13 16.3084 13.5182 15.1963 14.5059 14.3496C15.4983 13.4989 16.8731 13.0001 18.333 13Z" stroke="#A3E635" stroke-width="2" />
                </svg>
              </div>
              <div className="complex_card_content">
                <h3>КОНТРОЛЬ ЗАКОНОДАТЕЛЬНОГО СООТВЕТСТВИЯ</h3>
                <p>
                  Контроль законодательного соответствия рекламы, сопровождение и
                  участие инфлюенсеров в офлайн и традиционных медиа-активностях.
                </p>
              </div>
            </div>

            <div className="complex_card">
              <div className="complex_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M16.6667 37.5003V83.3337M33.3334 16.667V83.3337M50.0001 45.8337V83.3337M66.6668 29.167V83.3337M83.3334 58.3337V83.3337" stroke="#A3E635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
              <div className="complex_card_content">
                <h3>АНАЛИТИКА ЭФФЕКТИВНОСТИ КАМПАНИЙ</h3>
                <p>
                  Аналитика эффективности кампаний, предоставление подробных
                  отчётов и организация амбассадорских программ под брендов.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="coplex_advesting">
          <div className="scroll-wrapper">
            <div className="complex_tags_row">
              <span className="complex_tag">SMM</span>
              <span className="complex_tag">PR</span>
              <span className="complex_tag">ПРОДАКШЕН</span>
              <span className="complex_tag">ЮРИДИЧЕСКОЕ СОПРОВОЖДЕНИЕ</span>
              <span className="complex_tag">ПОДБОР БЛОГЕРОВ</span>
              <span className="complex_tag">КРЕАТИВНЫЕ СТРАТЕГИИ</span>
              <span className="complex_tag">ИНФЛЮЕНС-МАРКЕТИНГ</span>
            </div>
            <div className="complex_tags_row">
              <span className="complex_tag">SMM</span>
              <span className="complex_tag">PR</span>
              <span className="complex_tag">ПРОДАКШЕН</span>
              <span className="complex_tag">ЮРИДИЧЕСКОЕ СОПРОВОЖДЕНИЕ</span>
              <span className="complex_tag">ПОДБОР БЛОГЕРОВ</span>
              <span className="complex_tag">КРЕАТИВНЫЕ СТРАТЕГИИ</span>
              <span className="complex_tag">ИНФЛЮЕНС-МАРКЕТИНГ</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
