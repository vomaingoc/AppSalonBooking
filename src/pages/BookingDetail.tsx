import React from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/booking.scss'
import { Button, Row, Col, Divider, Avatar } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
function BookingsDetailPage() {
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} />
            </div>
            <div className="title">Bookings #1</div>
            <div className="button-checkin">
              <Button type="link" shape="circle" href="/qrscane">
                Checkin
              </Button>
            </div>
          </div>
        </div>
        <div
          className="app-content"
          style={{ background: '#fff', marginTop: 16, paddingTop: 16, paddingBottom: 16 }}
        >
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl2">Salon</div>
            </Col>
            <Col>
              <div className="lbl3">Pasta Louise</div>
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl2">Time</div>
            </Col>
            <Col>
              <div className="lbl3">10:30 AM - Aug 11, 2022</div>
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl2">Employees</div>
            </Col>
            <Col>
              <Avatar.Group>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Avatar.Group>
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl2">Note</div>
            </Col>
            <Col>
              <div className="lbl3">...</div>
            </Col>
          </Row>
        </div>
        <div
          className="app-content"
          style={{ background: '#fff', marginTop: 16, paddingTop: 16, paddingBottom: 16 }}
        >
          <div className="list-service list-service--recap">
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="addons">+ Add-on1($5), add-on2($2), add-on3($10)</div>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          </div>
        </div>
        <div className="group-button-bottom-fixed">
          <Row style={{ justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
            <Col>
              <div className="lbl2">Subtotal</div>
            </Col>
            <Col>
              <div className="lbl3 price">$0.00</div>
            </Col>
          </Row>
        </div>
        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default BookingsDetailPage
