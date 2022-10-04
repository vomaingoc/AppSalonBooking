import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/profile.scss'
import { Button, Col, Row } from 'antd'
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons'
import type { RadioChangeEvent } from 'antd'
import { Radio, Divider } from 'antd'
function LanguagesPage() {
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} href="/profile" />
            </div>
            <div className="title">Languages</div>
          </div>
        </div>
        <div className="app-content" style={{ paddingTop: 16 }}>
          <Radio.Group onChange={onChange} value={value} className="fullwidth">
            <div>
              <Radio.Button className="fullwidth rdoLang" value={1}>
                English
                <div className="icon-checked-langs">
                  <CheckOutlined />
                </div>
              </Radio.Button>
            </div>
            <Divider style={{ marginTop: 1, marginBottom: 1 }} />
            <div>
              <Radio.Button value={2} className="fullwidth rdoLang">
                Tiếng Việt
                <div className="icon-checked-langs">
                  <CheckOutlined />
                </div>
              </Radio.Button>
              <Divider style={{ marginTop: 1, marginBottom: 1 }} />
            </div>
          </Radio.Group>
        </div>
        <div className="group-button-bottom-fixed">
          <Button htmlType="button" className="mybutton fullwidth" size="large" href="/profile">
            Save
          </Button>
        </div>
        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default LanguagesPage
