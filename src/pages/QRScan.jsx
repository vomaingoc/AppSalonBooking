import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

import { Button } from 'antd'
const App = () => {
  const [scannedCodes, setScannedCodes] = useState('')

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult)
      setScannedCodes(decodedText)
      html5QrcodeScanner.clear()
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`)
    }
    let config = { fps: 10, qrbox: {width: 250, height: 250} };
    let html5QrcodeScanner = new Html5QrcodeScanner( 'reader', config)
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)
    // const html5QrCode = new Html5QrcodeScanner("reader");
    // const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    //   console.log(`Code matched = ${decodedText}`, decodedResult)
    //   setScannedCodes(decodedText)
    // };
    //  html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
  }, [])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div className="button-back" style={{ paddingLeft: 16, paddingTop: 44 }}>
        <Button type="text" shape="circle" href="/">
          Back
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>{scannedCodes}</div>
      <div
        id="reader"
        style={{ width: 300, height: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 24 }}
      ></div>
    </div>
  )
}

export default App
