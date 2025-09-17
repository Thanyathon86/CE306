import React, { useState } from "react";

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("ยังไม่ได้กรอก");
  const [submittedEmail, setSubmittedEmail] = useState<string>("ยังไม่ได้กรอก");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name || "ยังไม่ได้กรอก");
    setSubmittedEmail(email || "ยังไม่ได้กรอก");
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setSubmittedName("ยังไม่ได้กรอก");
    setSubmittedEmail("ยังไม่ได้กรอก");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {/* หัวข้อ */}
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        User Form Exercise - Solution
      </h2>

      {/* ฟอร์ม */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>ชื่อ:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="กรอกชื่อของคุณ"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>อีเมล:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="กรอกอีเมลของคุณ"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* ปุ่ม */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {/* ข้อมูลปัจจุบัน */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#00000",
          padding: "20px",
          borderRadius: "8px",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <p style={{ fontWeight: "bold" }}>ข้อมูลปัจจุบัน:</p>
        <p>ชื่อ: {submittedName}</p>
        <p>อีเมล: {submittedEmail}</p>
      </div>
    </div>
  );
};

export default UserForm;
