import React from 'react'
import 'assets/globalStyles/login.scss'
import { Image, Form, notification, Input, Space, Button, Select } from 'antd'
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

function FogotPasswordPage() {
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
      navigate('/forgot-password-code')
    } catch (error: any) {
      openNotificationWithIcon('error', error.response.data.message)
    }
  }

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
          <div className="title-form">Forgot password</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ dialCode: '+1', phoneNumber: '6508888888' }}
            onFinish={onFinishAsync}
            autoComplete="off"
          >
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

export default FogotPasswordPage
