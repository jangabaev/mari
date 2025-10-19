import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { BackgroundCircle } from "../advertising/bacground/circle";
import { useModal } from "../../modal.context";

type Status = { type: "success" | "error" | ""; text: string };

function Toast({ status, onClose }: { status: Status; onClose: () => void }) {
  if (!status.type) return null;
  return (
    <div
      className={`toast ${status.type}`}
      role={status.type === "error" ? "alert" : "status"}
      aria-live="polite"
      onClick={onClose}
    >
      {status.text}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });
  const { isOpen, closeModal } = useModal();
  const [status, setStatus] = useState<Status>({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Inject minimal styles (toast + button states) — kerakli bo‘lsa sozlab olasiz
    const id = "contact-form-styles";
    let style = document.getElementById(id) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = id;
      document.head.appendChild(style);
    }
    style.textContent = `
      .toast{
        position: fixed; inset-inline: 0; top: 16px; margin-inline: auto;
        max-width: 480px; padding: 12px 16px; border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15); z-index: 9999;
        font-weight: 500; text-align: center; cursor: pointer;
      }
      .toast.success{ background:#e8f7ed; color:#116b33; border:1px solid #bfe8cb; }
      .toast.error{ background:#fff0f2; color:#9c1c30; border:1px solid #ffd0d6; }
      .btn-send[disabled]{ opacity:.6; cursor: not-allowed; }
    `;
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((s) => ({ ...s, [name]: checked }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  }


  function validate() {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.phone.trim()) return "Please enter a phone number";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please enter a valid email";
    if (!form.message.trim()) return "Please enter a message";
    if (!form.agree) return "Please agree to the privacy policy";
    return null;
  }

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyOtbeEWK_vnOSifpqmGcwYLIt6bW4r2RjnmlvigVA6v-60LGL0_50_3f5850RpTW7-mw/exec";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 1) Validatsiya — o‘tmasa ERROR toast chiqsin va fetch ketmasin
    const v = validate();
    if (v) {
      showStatus("error", v);
      return;
    }

    setLoading(true);

    const body = new URLSearchParams({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      agree: form.agree ? "yes" : "no",
    });

    try {
      const resp = await fetch(APPS_SCRIPT_URL, { method: "POST", body });

      // Apps Script’da ko‘pincha CORS tufayli resp.type === 'opaque' bo‘lishi mumkin.
      // Shu sabab, network xatolik bo‘lmasa success deb qabul qilamiz.
      if (resp.ok || resp.type === "opaque") {
        showStatus("success", "Message sent — thank you!");

        // 2) Submit bo‘lsa — formani tozalash
        setForm({ name: "", phone: "", email: "", message: "", agree: false });
      } else {
        showStatus("error", "Failed to send. Please try again.");
      }
    } catch (err) {
      showStatus("error", "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function showStatus(type: Status["type"], text: string) {
    setStatus({ type, text });
    // Avto-yopilish (3s), foydalanuvchi bosib ham yopishi mumkin
    window.clearTimeout((showStatus as any)._t);
    (showStatus as any)._t = window.setTimeout(() => {
      setStatus({ type: "", text: "" });
    }, 3000);
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className={`contact_right ${isOpen && "active"}`}
        onClick={() => closeModal()}
      >
        <div className="contact_rigth_register" onClick={(e) => e.stopPropagation()}>
          <div className="contact_right_form">
            <div className="form-row">
              <input
                className="input"
                name="name"
                placeholder="Имя"
                value={form.name}
                onChange={onChange}
              />
            </div>

           <div className="form-row">
  <IMaskInput
    mask="+{7} (000) 000-00-00"
    value={form.phone}
    // faqat raqamlar kiritilsin:
    definitions={{ 0: /[0-9]/ }}
    onAccept={(value: string) => setForm(s => ({ ...s, phone: value }))}
    inputMode="tel"
    name="phone"
    className="input"
    placeholder="+7 (___) ___-__-__"
  />
</div>

            <div className="form-row">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Почта"
                value={form.email}
                onChange={onChange}
              />
            </div>

            <div className="form-row">
              <textarea
                className="textarea"
                name="message"
                placeholder="Сообщение"
                value={form.message}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <div className="checkbox-row">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={onChange}
              />
              <label htmlFor="agree" className="small-note">
                Я согласен с <a href="#">политикой конфиденциальности</a>
              </label>
            </div>

            <button type="submit" className="btn-send" disabled={loading}>
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </div>
        </div>

        <div className="contact_rigth_bacground"></div>
        <div className="contact_rigth_bacground_second"></div>
        <div className="contact_rigth_bacground_circle">
          <BackgroundCircle className="black" />
        </div>
      </form>

      {/* Toast — submit bo‘lganda muvaffaqiyat yoki xato xabari */}
      <Toast status={status} onClose={() => setStatus({ type: "", text: "" })} />
    </>
  );
}
