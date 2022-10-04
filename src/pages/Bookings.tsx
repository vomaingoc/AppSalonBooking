import React from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/booking.scss'
import { Button, Row, Col, Divider } from 'antd'
import { Tabs } from 'antd'
import MenuBottom from './components/MenuBottom'
function BookingsPage() {
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="title">Bookings</div>
          </div>
        </div>

        <Tabs defaultActiveKey="1" className="my-tabs">
          <Tabs.TabPane tab="Upcoming" key="1">
            <div className="list-bookings">
              <div className="item">
                <a href="/bookings/1">
                  <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                    <Col>
                      <div className="name">Pasta Louise</div>
                      <div className="services">2 services</div>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      <div className="datetime">10:30 AM - Jul 12, 2022</div>
                      <div className="price">$350.00</div>
                    </Col>
                  </Row>
                </a>

                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status">Confirming...</div>
                  </Col>
                  <Col>
                    <Button className="booking-action cancel">Cancel order</Button>
                  </Col>
                </Row>
              </div>
              <div className="item">
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="name">Pasta Louise</div>
                    <div className="services">2 services</div>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <div className="datetime">10:30 AM - Jul 12, 2022</div>
                    <div className="price">$350.00</div>
                  </Col>
                </Row>
                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status confirmed">Confirmed</div>
                  </Col>
                  <Col>
                    <Button className="booking-action checkin">Checkin</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Waiting room" key="2">
            <div className="list-bookings">
              <div className="item">
                <a href="/bookings/1">
                  <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                    <Col>
                      <div className="name">Pasta Louise</div>
                      <div className="services">2 services</div>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      <div className="datetime">10:30 AM - Jul 12, 2022</div>
                      <div className="price">$350.00</div>
                    </Col>
                  </Row>
                </a>

                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status waiting">Waiting</div>
                  </Col>
                  <Col>
                    <Button className="booking-action cancel">Cancel order</Button>
                  </Col>
                </Row>
              </div>
              <div className="item">
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="name">Pasta Louise</div>
                    <div className="services">2 services</div>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <div className="datetime">10:30 AM - Jul 12, 2022</div>
                    <div className="price">$350.00</div>
                  </Col>
                </Row>
                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status processing">Processing</div>
                  </Col>
                </Row>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="History" key="3">
            <div className="list-bookings">
              <div className="item">
                <a href="/bookings/1">
                  <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                    <Col>
                      <div className="name">Pasta Louise</div>
                      <div className="services">2 services</div>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      <div className="datetime">10:30 AM - Jul 12, 2022</div>
                      <div className="price">$350.00</div>
                    </Col>
                  </Row>
                </a>

                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status canceled">Canceled</div>
                  </Col>
                </Row>
              </div>
              <div className="item">
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="name">Pasta Louise</div>
                    <div className="services">2 services</div>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <div className="datetime">10:30 AM - Jul 12, 2022</div>
                    <div className="price">$350.00</div>
                  </Col>
                </Row>
                <Divider style={{ marginTop: 8, marginBottom: 8 }} />
                <Row gutter={6} style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <div className="status done">Done</div>
                  </Col>
                </Row>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
        <MenuBottom itemActive={2} />
      </div>
    </Layout>
  )
}

export default BookingsPage
