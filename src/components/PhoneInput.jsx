import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneNumberInput({ label }) {
  const [phone, setPhone] = useState("+506");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ fontSize: "16px", fontWeight: "500" }}>{label}</label>
      <PhoneInput
        defaultCountry="cr"
        value={phone}
        onChange={setPhone}
        disableDialCode
        className="phone-input-container"
        inputProps={{ className: "phone-input" }}
      />
    </div>
  );
};