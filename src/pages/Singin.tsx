import React, { useContext, useState } from 'react'
import 'assets/globalStyles/login.scss'
import { Image, Form, notification, Input, Space, Button, Row, Col, Checkbox } from 'antd'
import imglogin from 'assets/images/imglogin.png'
import imgloginText from 'assets/images/text-banner-login.png'
import { useNavigate } from 'react-router-dom'
import { MainContext } from 'contexts'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import Layout from 'layouts/MainLayout'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { axiosClient } from 'http-services'
import END_POINTS from 'http-services/end-points'
type NotificationType = 'success' | 'info' | 'warning' | 'error'
const openNotificationWithIcon = (type: NotificationType, message: string) => {
  notification[type]({
    message: message,
  })
}
function SigninPage() {
  const { loginedSetter } = useContext(MainContext)
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
      // const result = await axiosClient().get(END_POINTS.)
      // if (!result) {
      //   return
      // }
      // loginedSetter(result.data)
      navigate('/')
    } catch (error: any) {
      openNotificationWithIcon('error', error.response.data.message)
    }
  }
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
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
          <Image rootClassName="img-2" src={imgloginText} preview={false} />
        </div>
        <div className="form-login">
          <div className="title-form"></div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initvalues}
            onFinish={onFinishAsync}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Username</div>
                <Input placeholder="Username" size="large" />
              </Space>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Password</div>
                <div className="input-pass">
                  <Input type="password" placeholder="Password" size="large" />
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

            <div style={{ marginBottom: 24 }}>
              <Row className="row-login">
                <Col>
                  <Checkbox onChange={onChange}>Remember me</Checkbox>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <Button
                    htmlType="button"
                    type="link"
                    href="/forgot-password"
                    style={{ paddingRight: 0 }}
                  >
                    Forgot password
                  </Button>
                </Col>
              </Row>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="mybutton fullwidth" size="large">
                Sign in
              </Button>
            </Form.Item>

            <div className="text-center">
              <Form.Item>
                Don’t have an account?{' '}
                <Button type="link" href="/signup" htmlType="button" style={{ paddingLeft: 0 }}>
                  Signup
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default SigninPage
