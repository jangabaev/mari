import { useEffect, useState } from "react";
import { BackgroundCircle } from "../advertising/bacground/circle";

export default function ContactForm({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", agree: false });
    const [status, setStatus] = useState<{} | any>(null);
    console.log(modal)
    useEffect(() => {
        // Inject stylesheet once for demo / single-file convenience

        const id = "contact-form-styles";
        if (!document.getElementById(id)) {
            const style = document.createElement("style");
            style.id = id;
            document.head.appendChild(style);
        }
    }, []);

    function onChange(e: any) {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    }

    function validate() {
        if (!form.name.trim()) return "Please enter your name";
        if (!form.phone.trim()) return "Please enter a phone number";
        if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return "Please enter a valid email";
        if (!form.message.trim()) return "Please enter a message";
        if (!form.agree) return "Please agree to the privacy policy";
        return null;
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        const err = validate();
        if (err) {
            setStatus({ type: "error", text: err });
            return;
        }
        setStatus({ type: "pending", text: "Sending..." });

        // Simulate send
        await new Promise((r) => setTimeout(r, 800));
        setStatus({ type: "success", text: "Message sent — thank you!" });

        // Reset form after send
        setForm({ name: "", phone: "", email: "", message: "", agree: false });
    }

    return (
        <form onSubmit={onSubmit} noValidate className={`contact_right ${modal && "active"}`} onClick={()=>setModal(false)}>
            <div className="contact_rigth_register" onClick={(e)=>e.stopPropagation()}>
            <div className="contact_right_form">
                <div className="form-row">
                    <input className="input" name="name" placeholder="Имя" value={form.name} onChange={onChange} />
                </div>

                <div className="form-row">
                    <input className="input" name="phone" placeholder="+7" value={form.phone} onChange={onChange} />
                </div>

                <div className="form-row">
                    <input className="input" name="email" type="email" placeholder="Почта" value={form.email} onChange={onChange} />
                </div>

                <div className="form-row">
                    <textarea className="textarea" name="message" placeholder="Сообщение" value={form.message} onChange={onChange} />
                </div></div>
            <div>
                <div className="checkbox-row">
                    <input id="agree" name="agree" type="checkbox" checked={form.agree} onChange={onChange} />
                    <label htmlFor="agree" className="small-note">Я согласен с <a href="#">политикой конфиденциальности</a></label>
                </div>
                <button type="submit" className="btn-send">Отправить</button></div>

            {/* {status && (
                <div className="status" role={status.type === "error" ? "alert" : "status"} style={{ color: status.type === "error" ? "#FF8BA7" : "#bff081" }}>
                    {status.text}
                </div>
            )} */}
            </div>

            <div className="contact_rigth_bacground"></div>
            <div className="contact_rigth_bacground_second"></div>
            <div className="contact_rigth_bacground_circle"><BackgroundCircle className="black" /></div>
        </form>
    );
}
