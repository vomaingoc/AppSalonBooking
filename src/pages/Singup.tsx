import React, { useContext, useState } from 'react'
import 'assets/globalStyles/login.scss'
import { Image, Form, notification, Input, Space, Button, Select } from 'antd'
import imglogin from 'assets/images/imglogin.png'
import { useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import Layout from 'layouts/MainLayout'
const { Option } = Select
type NotificationType = 'success' | 'info' | 'warning' | 'error'
const openNotificationWithIcon = (type: NotificationType, message: string) => {
  notification[type]({
    message: message,
  })
}

function SignupPage() {
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
      navigate('/')
    } catch (error: any) {
      openNotificationWithIcon('error', error.response.data.message)
    }
  }

  const [showPass, setShowPass] = useState(false)
  const handleClickShowPass = () => {
    setShowPass((prev) => !prev)
  }
  const initvalues = { username: '', password: '', dialCode: '+1', phoneNumber: '', email: '' }
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
          <div className="title-form">Sign up</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initvalues}
            onFinish={onFinishAsync}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">
                  Username<span>*</span>
                </div>
                <Input placeholder="Enter username" size="large" />
              </Space>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">
                  Email<span>*</span>
                </div>
                <Input placeholder="Enter email" size="large" />
              </Space>
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your Phone number!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">
                  Phone number<span>*</span>
                </div>
                <Input
                  addonBefore={
                    <Form.Item name="dialCode" noStyle>
                      <Select style={{ width: 70 }}>
                        <Option value="+1">+1</Option>
                        <Option value="+84">+84</Option>
                      </Select>
                    </Form.Item>
                  }
                  placeholder="Enter phone number"
                  size="large"
                />
              </Space>
            </Form.Item>
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
            <Form.Item>
              <Button type="primary" htmlType="submit" className="mybutton fullwidth" size="large">
                Get started
              </Button>
            </Form.Item>

            <div className="text-center">
              <Form.Item>
                Already have an account?{' '}
                <Button type="link" href="/signin" htmlType="button" style={{ paddingLeft: 0 }}>
                  Signin
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default SignupPage
