import logo from "../assets/logo.png";
import Input from "./Input.jsx";
import PhoneInput from "./PhoneInput.jsx";

export default function FormSection() {
  return (
    <div className="form-section">
      <img src={logo} alt="logo" className="logo" />
      <h1>Registro</h1>
      <form className="form">
        <Input label={"Nombres"} placeholder={"Ingresar nombres"} type="text" />
        <Input label={"Apellidos"} placeholder={"Ingresar apellidos"} type="text" />
        <Input label={"Correo"} placeholder={"ejemplo@gmail.com"} type="email" />
        <PhoneInput label="Número de teléfono" />
      </form>
    </div>
  );
}
