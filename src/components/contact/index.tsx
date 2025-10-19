import ContactForm from "./contact_form"
import { BackgroundCircle } from "../advertising/bacground/circle"
import "./style.css"
import { useModal } from "../../modal.context"

export const Contact = () => {
  const { closeModal, modalduggle } = useModal()
  return (
    <section className="contact" id="contact">
      <div className="contact_flex">
        <div className="contact_left">
          <div>
            <h4><span>оставьте заявку,</span> чтобы обсудить проект</h4>
            <div className="contact_left_buttons">
              <div>
                <a href="mailto:reklama.mari@internet.ru">
                  <button>
                    hello@mari.ru
                  </button>
                </a>
              </div>
              <div>
                <a href="tel:+79166762266">
                  <button>
                    +7 (916) 676 - 22-66
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="contack_left_bottom">
            <p className="contact_left_dectope_p">Ооо Мари … заменить на: ООО «МАРИ» ОГРН: 1215000028440, ИНН: 5047249433, М.о. г Химки, ул Кирова, дом 10, корпус 1, помещ/ком. 205/1 <strong><a href="/politika.pdf" target="_blank" rel="noopener noreferrer">  Юридическая информация</a></strong></p>
            <div className="contack_left_bottom_buttons">
              <a href="https:\\t.me\Reklama_Elena"><button className="contact_telegram"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none">
                <path d="M41.6999 3.77066L35.3874 33.3227C34.9166 35.404 33.7083 35.8727 31.9624 34.9332L22.4937 27.9498L17.8583 32.3811C17.3895 32.8519 16.9187 33.3227 15.8437 33.3227L16.5833 23.5832L34.2458 7.53316C34.9833 6.79358 34.0437 6.52483 33.1041 7.13108L11.1437 20.9644L1.67284 18.0769C-0.408413 17.4061 -0.408414 15.9936 2.14367 15.0561L38.9458 0.749826C40.7583 0.212326 42.3041 1.15399 41.6999 3.77066Z" fill="#3B82F6" />
              </svg> телеграм</button>
              </a>
              <a href="mailto:reklama.mari@internet.ru">
                <button className="contact_email"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                  <path d="M25.6083 10.5835L11.8875 24.3043C11.4895 24.6887 11.1721 25.1484 10.9537 25.6568C10.7354 26.1651 10.6204 26.7119 10.6156 27.2651C10.6108 27.8184 10.7162 28.367 10.9257 28.8791C11.1352 29.3912 11.4446 29.8564 11.8359 30.2476C12.2271 30.6388 12.6923 30.9482 13.2044 31.1577C13.7164 31.3672 14.2651 31.4727 14.8183 31.4679C15.3716 31.463 15.9183 31.3481 16.4267 31.1297C16.935 30.9114 17.3948 30.5939 17.7792 30.196L31.1417 16.4751C32.6596 14.9035 33.4996 12.7984 33.4806 10.6135C33.4616 8.42849 32.5852 6.33838 31.0402 4.79332C29.4951 3.24825 27.405 2.37184 25.22 2.35285C23.035 2.33387 20.93 3.17382 19.3583 4.6918L5.99375 18.4106C3.64935 20.755 2.33228 23.9347 2.33228 27.2501C2.33228 30.5656 3.64935 33.7453 5.99375 36.0897C8.33815 38.4341 11.5178 39.7512 14.8333 39.7512C18.1488 39.7512 21.3285 38.4341 23.6729 36.0897L36.7083 23.0835" stroke="#A3E635" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg> отправить бриф</button></a>
              <span>
                <button className="contact_button_show" onClick={() => modalduggle()}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                  <path d="M32.3536 19.3536C32.5488 19.1583 32.5488 18.8417 32.3536 18.6464L29.1716 15.4645C28.9763 15.2692 28.6597 15.2692 28.4645 15.4645C28.2692 15.6597 28.2692 15.9763 28.4645 16.1716L31.2929 19L28.4645 21.8284C28.2692 22.0237 28.2692 22.3403 28.4645 22.5355C28.6597 22.7308 28.9763 22.7308 29.1716 22.5355L32.3536 19.3536ZM2 19V19.5H32V19V18.5H2V19Z" fill="#FF1F8F" />
                </svg> Отправить заявку</button>
              </span>
            </div>
            <p className="contact_left_mobil_p">ООО "МАРИ" ОГРН 1215000028440, Санкт-Петербург г, Московский пр., д. 11, лит.А Юридическая информация</p>
          </div>
          <div className="contact_left_circle"><BackgroundCircle className="black" line={10} /></div>
        </div>
        <div className={`modal_background`} onClick={() => closeModal()}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
