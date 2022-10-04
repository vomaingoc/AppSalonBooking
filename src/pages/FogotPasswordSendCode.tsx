import React, { useState } from 'react'
import 'assets/globalStyles/login.scss'
import { Image, Form, notification, InputNumber, Button } from 'antd'
import imglogin from 'assets/images/imglogin.png'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Layout from 'layouts/MainLayout'
type NotificationType = 'success' | 'info' | 'warning' | 'error'
const openNotificationWithIcon = (type: NotificationType, message: string) => {
  notification[type]({
    message: message,
  })
}

function FogotcodeSendCode() {
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
    } catch (error: any) {
      openNotificationWithIcon('error', error.response.data.message)
    }
  }
  const [code, setCode] = useState([])
  const handleChangeCode = (e: any) => {
    setCode(e[0].value.split(''))
    if (e[0].value.split('').length >= 4) {
      setTimeout(() => {
        navigate('/new-password')
      }, 1000)
    }
  }
  const initvalues = { code: '' }
  return (
    <Layout>
      <div className="login-page">
        <div className="img-login">
          <Image
            rootClassName="img-1"
            width={'100%'}
            height={'100%'}
            src={imglogin}
            preview={false}
          />
        </div>
        <div className="form-login">
          <div className="coltrol-top">
            <Button
              icon={<ArrowLeftOutlined />}
              type="text"
              href="/signin"
              htmlType="button"
            ></Button>
          </div>
          <div className="desc-form-2">Enter the code sent to</div>

          <div className="phonenumber-lg">+1 935 288 488</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initvalues}
            onFinish={onFinishAsync}
            autoComplete="off"
            onFieldsChange={(_, allFields) => {
              handleChangeCode(allFields)
            }}
          >
            <Form.Item name="code" className="text-center">
              <div className="input-code">
                <InputNumber size="large" type="number" max={9999} className={'input-code-item'} />
                <div className="label">
                  <span key={1}>{code[0]}</span>
                  <span key={1}>{code[1]}</span>
                  <span key={1}>{code[2]}</span>
                  <span key={1}>{code[3]}</span>
                </div>
              </div>
            </Form.Item>

            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                className="mybutton mybutton--white button-resend-code"
                size="large"
              >
                <span className="number">30</span> |{' '}
                <span className="text" style={{ color: '#ccc' }}>
                  Resend code
                </span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default FogotcodeSendCode
