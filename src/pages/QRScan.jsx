// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "../assets/globalStyles/camera.scss";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  // const [data, setData] = useState("");
  const [scanEnable, setScanEnable] = useState(true);
  return (
    <>
      {scanEnable && (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              // setData(result?.text);
              if (result?.text) {
                setScanEnable(false);
                alert("Successfully checked in");
                navigate("/bookings");
              }
            }

            if (!!error) {
              console.info(error);
            }
          }}
          videoContainerStyle={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            paddingTop: 0,
          }}
          className="mycamera"
          videoStyle={{ width: "100vw", height: "100vh" }}
          constraints={{
            facingMode: "environment",
          }}
        />
      )}
      {/* <p>{data}</p> */}
    </>
  );
};

export default App;
