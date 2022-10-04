// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "../assets/globalStyles/camera.css";

const App = () => {
  // const [startScan, setStartScan] = useState(true);
  // const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("NULL");

  // const handleScan = async (scanData) => {
  //   setLoadingScan(true);
  //   setData(scanData);
  //   // if (scanData && scanData !== "") {
  //   //   setData(scanData);
  //   //   setStartScan(false);
  //   //   setLoadingScan(false);
  //   // }
  // };
  // const handleError = (err) => {
  //   console.error(err);
  // };
  return (
    <div className="App">
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
        constraints={{
          facingMode: "environment",
        }}
      />
      <p>{data}</p>
      {/* {startScan && (
        <QrReader
          delay={1000}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "300px" }}
          constraints={{
            facingMode: "environment",
          }}
        />
      )} */}
      {/* <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button> */}
      {/* {loadingScan && <p>Loading</p>} */}
      {/* <p>{data}</p> */}
    </div>
  );
};

export default App;
