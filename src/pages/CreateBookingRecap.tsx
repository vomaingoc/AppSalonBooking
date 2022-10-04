import React from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/booking.scss'
import { Button, Row, Col, Avatar, Divider } from 'antd'
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons'
function CreateBookingRecapPage() {
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} href="/bookings" />
            </div>
            <div className="title">Booking recap</div>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
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
                  <Button type="link" size="small">
                    Edit
                  </Button>
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
                </Col>
                <Col>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <Button type="link" style={{ paddingLeft: 0 }}>
              <PlusOutlined /> Add services, products{' '}
            </Button>
          </div>
        </div>

        <div className="group-button-bottom-fixed group-button-bottom-fixed--2">
          <Row style={{ justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
            <Col>
              <div className="lbl2">Tax</div>
            </Col>
            <Col>
              <div className="lbl3">$0.00</div>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
            <Col>
              <div className="lbl2">Discount</div>
            </Col>
            <Col>
              <div className="lbl3">$0.00</div>
            </Col>
          </Row>
          <Button type="primary" htmlType="button" className="mybutton fullwidth" size="large">
            <Row style={{ justifyContent: 'space-between' }}>
              <Col>Total</Col>
              <Col>$95.00</Col>
            </Row>
          </Button>
        </div>
        <div className="group-button-bottom-fixed-lbl group-button-bottom-fixed-lbl--2"></div>
      </div>
    </Layout>
  )
}

export default CreateBookingRecapPage
