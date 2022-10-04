import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/profile.scss'
import { Button, Form, Input, Select, Space, Checkbox } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
const { Option } = Select
function LanguagesPage() {
  const navigate = useNavigate()
  const onFinishAsync = async (values: any) => {
    try {
      navigate('/')
    } catch (error: any) {}
  }
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const initvalues = { dialCode: 1 }
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} href="/profile" />
            </div>
            <div className="title">Information</div>
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
              name="firstName"
              rules={[{ required: true, message: 'Please input your firstName!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">
                  First name<span>*</span>
                </div>
                <Input placeholder="Enter firstName" size="large" />
              </Space>
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: 'Please input your lastName!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">
                  Last name<span>*</span>
                </div>
                <Input placeholder="Enter lastName" size="large" />
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
              name="birthday"
              rules={[{ required: true, message: 'Please input your birthday!' }]}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Birthday</div>
                <Input
                  placeholder="Enter birthday"
                  size="large"
                  type="date"
                  className="my-input-lg"
                />
              </Space>
            </Form.Item>
            <Form.Item name="hideYear">
              <Checkbox onChange={onChangeCheckbox} style={{ color: '#667085' }}>
                Hide year of birth
              </Checkbox>
            </Form.Item>
            <Form.Item name="gender" noStyle>
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="lbl-login">Gender</div>
                <Select style={{ width: '100%' }} size="large" placeholder="Select gender">
                  <Option value="1">Male</Option>
                  <Option value="0">Female</Option>
                </Select>
              </Space>
            </Form.Item>

            <div className="group-button-bottom-fixed">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mybutton fullwidth"
                  size="large"
                >
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default LanguagesPage
