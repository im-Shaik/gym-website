import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Alert } from "./Alert";

function Contact() {
  const [contactData, setGettingContactData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGettingContactData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    if (
      contactData.name === null &&
      contactData.email === null &&
      contactData.number === null
    ) {
      Alert("Sorry!", "Please fill all fields", "error");

      return;
    }
    Alert(
      "Thanks for the info!",
      `We will contact soon ${contactData && contactData.name}`,
      "success"
    );
    setGettingContactData({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <section
      style={{
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "400px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.82184385987!2d77.65977499196262!3d8.72172225608551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1731169478638!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
          }}
        >
          <h1>Contact Us</h1>
          <TextField
            name="name"
            type="text"
            label="Your name here"
            color="secondary"
            variant="outlined"
            margin="normal"
            value={contactData && contactData.name}
            onChange={(e) => handleChange(e)}
          />

          <TextField
            name="email"
            type="text"
            label="Your email here"
            color="secondary"
            variant="outlined"
            margin="normal"
            value={contactData && contactData.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="number"
            type="number"
            label="Your number here"
            color="secondary"
            variant="outlined"
            margin="normal"
            value={contactData && contactData.number}
            onChange={(e) => handleChange(e)}
          />
          <Button
            style={{
              marginTop: "10px",
              padding: "15px",
            }}
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
