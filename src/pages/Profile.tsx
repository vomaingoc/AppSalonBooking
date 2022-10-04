import React from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/profile.scss'
import { Outlet, Link } from 'react-router-dom'
import { Row, Col, Divider, Avatar, Image, Button } from 'antd'
import imgSalon1 from 'assets/images/salon1.jpg'
import {
  CameraOutlined,
  UserOutlined,
  PieChartOutlined,
  LockOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  RightOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import MenuBottom from './components/MenuBottom'
function ProfilePage() {
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="title">Profile</div>
          </div>
        </div>
        <div className="app-content">
          <div className="user-profile text-center">
            <div className="image">
              <span className="avatar">
                <Avatar size={76} src={<Image src={imgSalon1} />} />
                <div className="icon-camera">
                  <Button shape="circle" type="primary" size="small">
                    <CameraOutlined />
                  </Button>
                </div>
              </span>
            </div>
            <div className="name">
              Atali Craig <span>- VIP</span>
            </div>
            <div className="membership">
              <div>
                Credit: <span className="number">$500.00</span>
              </div>
              <div>
                Credit per month: <span className="number">$20.00</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="app-content"
          style={{ background: '#fff', paddingTop: 8, paddingBottom: 8 }}
        >
          <div className="profile-actions" style={{ background: '#fff' }}>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#FDB022' }}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}
                  href="/information"
                >
                  Information
                  <span className="icon-arrow-right">
                    <RightOutlined />
                  </span>
                </Button>
                <Divider style={{ marginTop: 1, marginBottom: 1 }} />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#2E90FA' }}
                  icon={<PieChartOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}
                  href="/statistic"
                >
                  Statistic
                  <span className="icon-arrow-right">
                    <RightOutlined />
                  </span>
                </Button>
                <Divider style={{ marginTop: 1, marginBottom: 1 }} />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#FDB022' }}
                  icon={<LockOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}
                  href="/change-password"
                >
                  Change Password
                  <span className="icon-arrow-right">
                    <RightOutlined />
                  </span>
                </Button>
                <Divider style={{ marginTop: 1, marginBottom: 1 }} />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#4E5BA6' }}
                  icon={<GlobalOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}
                  href="/languages"
                >
                  Language
                  <span className="icon-arrow-right">
                    <span className="text">English</span>
                    <RightOutlined />
                  </span>
                </Button>
                <Divider style={{ marginTop: 1, marginBottom: 1 }} />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#2E90FA' }}
                  icon={<InfoCircleOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button type="text" style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}>
                  About us
                  <span className="icon-arrow-right">
                    <RightOutlined />
                  </span>
                </Button>
                <Divider style={{ marginTop: 1, marginBottom: 1 }} />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <Avatar
                  size={24}
                  className="icon-profile-action"
                  style={{ backgroundColor: '#F04438' }}
                  icon={<LogoutOutlined />}
                />
              </Col>
              <Col span={21}>
                <Button
                  type="text"
                  style={{ width: '100%', textAlign: 'left', paddingLeft: 0 }}
                  href="/signin"
                >
                  Logout
                  <span className="icon-arrow-right">
                    <RightOutlined />
                  </span>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <MenuBottom itemActive={4} />
      </div>
    </Layout>
  )
}

export default ProfilePage
