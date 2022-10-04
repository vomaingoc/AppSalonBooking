// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import '../assets/globalStyles/camera.css'

const App = () => {
  const [selected, setSelected] = useState('environment')
  const [startScan, setStartScan] = useState(true)
  const [loadingScan, setLoadingScan] = useState(false)
  const [data, setData] = useState('NULL')

  const handleScan = async (scanData) => {
    setLoadingScan(true)
    console.log(`loaded data data`, scanData)
    if (scanData && scanData !== '') {
      setData(scanData)
      setStartScan(false)
      setLoadingScan(false)
    }
  }
  const handleError = (err) => {
    console.error(err)
  }
  return (
    <div className="App">
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={'environment'}>Back Camera</option>
            <option value={'user'}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            chooseDeviceId={() => selected}
            style={{ width: '300px' }}
          />
        </>
      )}
      <button
        onClick={() => {
          setStartScan(!startScan)
        }}
      >
        {startScan ? 'Stop Scan' : 'Start Scan'}
      </button>
      {loadingScan && <p>Loading</p>}
      <p>{data}</p>
    </div>
  )
}

export default App
