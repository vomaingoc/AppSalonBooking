import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

import { Button } from 'antd'
const App = () => {
  const [scannedCodes, setScannedCodes] = useState('')

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult)
      // setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]))
      setScannedCodes(decodedText)
      html5QrcodeScanner.clear()
    }

    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`)
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false,
    )
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)
  }, [])
  // function isMobile() {
  //   const isAndroid = /Android/i.test(navigator.userAgent)
  //   const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  //   return isAndroid || isiOS
  // }

  // async function setupCamera() {
  //   const isPortrait = true // do logic here

  //   let video = document.getElementById('video')

  //   console.log('Getting video')

  //   video.setAttribute('autoplay', '')
  //   video.setAttribute('muted', '')
  //   video.setAttribute('playsinline', '')

  //   console.log('Calling getUserMedia')

  //   return new Promise((resolve) => {
  //     ;(async () => {
  //       await navigator.mediaDevices
  //         .getUserMedia({
  //           audio: false,
  //           video: {
  //             facingMode: 'user',
  //             width: isPortrait ? 480 : 640,
  //             height: isPortrait ? 640 : 480,
  //           },
  //         })
  //         .then((stream) => {
  //           console.log('Got getUserMedia stream')
  //           video.srcObject = stream
  //           video.play()
  //           resolve(true)
  //         })
  //         .catch((err) => {
  //           console.log('Encountered getUserMedia error', err)
  //           resolve(false)
  //         })
  //     })()
  //   })
  // }

  // ;(async () => {
  //   const ret = await setupCamera()
  //   console.log(`Initialised camera: ${ret}`)
  // })()
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
