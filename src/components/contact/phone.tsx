import InputMask from "react-input-mask";

<InputMask
  mask="+7 (999) 999-99-99"
  maskChar="_"
  value={form.phone}
  onChange={onChange}
>
  {(inputProps) => (
    <input
      {...inputProps}
      type="tel"
      name="phone"
      className="input"
      placeholder="+7 (___) ___-__-__"
    />
  )}
</InputMask>
