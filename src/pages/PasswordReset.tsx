import React from 'react'
import 'assets/globalStyles/login.scss'
import { Image, notification, Button, Select } from 'antd'
import imglogin from 'assets/images/imglogin.png'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Layout from 'layouts/MainLayout'
const { Option } = Select
type NotificationType = 'success' | 'info' | 'warning' | 'error'
const openNotificationWithIcon = (type: NotificationType, message: string) => {
  notification[type]({
    message: message,
  })
}

function PasswordResetPage() {
  const navigate = useNavigate()

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
          <div className="title-form">Password reset</div>
          <div className="desc-form">
            Your password has been successfully reset. Click below to log in magically.
          </div>

          <Button type="primary" htmlType="submit" className="mybutton fullwidth" size="large">
            Continue
          </Button>
          <div style={{ marginTop: 24 }} className="text-center">
            <Button
              icon={<ArrowLeftOutlined />}
              type="link"
              href="/signin"
              htmlType="button"
              style={{ paddingLeft: 0 }}
            >
              Back to signin
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PasswordResetPage
