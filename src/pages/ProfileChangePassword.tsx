import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/profile.scss'
import { Button, Form, Input, Space } from 'antd'
import { ArrowLeftOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

function ChangePasswordPage() {
  const navigate = useNavigate()
  const initvalues = { currentPassword: '', password: '', confirmPassword: '' }
  const onFinishAsync = async (values: any) => {
    try {
      navigate('/password-reset')
    } catch (error: any) {}
  }
  const [showPass, setShowPass] = useState(false)
  const handleClickShowPass = () => {
    setShowPass((prev) => !prev)
  }
  const [showPass2, setShowPass2] = useState(false)
  const handleClickShowPass2 = () => {
    setShowPass2((prev) => !prev)
  }
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} href="/profile" />
            </div>
            <div className="title">Change password</div>
          </div>
        </div>
        <div className="app-content" style={{ paddingTop: 16 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initvalues}
            onFinish={onFinishAsync}
            autoComplete="off"
          >
            <Form.Item
              name="currentPassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Current password</div>
                <div className="input-pass">
                  <Input type="currentPassword" placeholder="Enter current password" size="large" />
                  <Button
                    type="text"
                    className="button-show-hide-pass"
                    onClick={handleClickShowPass2}
                    htmlType="button"
                  >
                    {!showPass2 ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </Button>
                </div>
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

            <div className="group-button-bottom-fixed">
              <Button className="mybutton fullwidth" size="large" href="/profile">
                Save
              </Button>
            </div>
          </Form>
        </div>

        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default ChangePasswordPage
