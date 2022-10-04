import React, { useState } from 'react'
import 'assets/globalStyles/login.scss'
import { Image, Form, notification, Input, Space, Button } from 'antd'
import imglogin from 'assets/images/imglogin.png'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import Layout from 'layouts/MainLayout'
type NotificationType = 'success' | 'info' | 'warning' | 'error'
const openNotificationWithIcon = (type: NotificationType, message: string) => {
  notification[type]({
    message: message,
  })
}

function SetNewPasswordPage() {
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
      navigate('/password-reset')
    } catch (error: any) {
      openNotificationWithIcon('error', error.response.data.message)
    }
  }
  const [showPass, setShowPass] = useState(false)
  const handleClickShowPass = () => {
    setShowPass((prev) => !prev)
  }

  const initvalues = { username: '', password: '', remmeber: false }
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
          <div className="title-form">Set new password</div>
          <div className="desc-form">
            Your new password must be different to previously used passwords.
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initvalues}
            onFinish={onFinishAsync}
            autoComplete="off"
          >
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Password</div>
                <div className="input-pass">
                  <Input type="password" placeholder="Enter password" size="large" />
                  <Button
                    type="text"
                    className="button-show-hide-pass"
                    onClick={handleClickShowPass}
                    htmlType="button"
                  >
                    {!showPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </Button>
                </div>
              </Space>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Confirm password</div>
                <div className="input-pass">
                  <Input type="password" placeholder="Enter password" size="large" />
                  <Button
                    type="text"
                    className="button-show-hide-pass"
                    onClick={handleClickShowPass}
                    htmlType="button"
                  >
                    {!showPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </Button>
                </div>
              </Space>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="mybutton fullwidth" size="large">
                Reset password
              </Button>
            </Form.Item>

            <div className="text-center">
              <Form.Item>
                <Button
                  icon={<ArrowLeftOutlined />}
                  type="link"
                  href="/signin"
                  htmlType="button"
                  style={{ paddingLeft: 0 }}
                >
                  Back to signin
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default SetNewPasswordPage
