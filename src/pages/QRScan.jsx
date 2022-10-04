// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "../assets/globalStyles/camera.css";

const App = () => {
  const [data, setData] = useState("");
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
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
        videoStyle={{}}
        constraints={{
          facingMode: "environment",
        }}
      />
      <p>{data}</p>
    </>
  );
};

export default App;
