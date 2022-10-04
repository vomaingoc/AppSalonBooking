import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/profile.scss'
import { Button, Col, Table } from 'antd'
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons'
import type { RadioChangeEvent } from 'antd'
import { Radio, Divider } from 'antd'
function LanguagesPage() {
  const dataSource = [
    {
      key: '1',
      name: 'Manicure deluxe',
      time: 45,
    },
    {
      key: '2',
      name: 'Manicure deluxe',
      time: 15,
    },
  ]

  const columns = [
    {
      title: 'SERVICE',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Times',
      dataIndex: 'time',
      key: 'time',
    },
  ]
  return (
    <Layout>
      <div className="app-page" style={{ background: '#fff' }}>
        <div className="app-header-control">
          <div className="inner">
            <div className="button-back">
              <Button type="text" shape="circle" icon={<ArrowLeftOutlined />} href="/profile" />
            </div>
            <div className="title">Statistic</div>
          </div>
        </div>
        <div className="app-content" style={{ paddingTop: 16 }}>
          <div className="statistic">
            <div className="list-group-item">
              <div className="item item-red">
                <div className="text">Total Bookings</div>
                <div className="number">3</div>
              </div>
              <div className="item item-green">
                <div className="text">Total Done</div>
                <div className="number">3</div>
              </div>
              <div className="item item-blue">
                <div className="text">Bookings last month</div>
                <div className="number">1</div>
              </div>
              <div className="item item-yellow">
                <div className="text">Incomming bookings</div>
                <div className="number">1</div>
              </div>
              <div className="item item-grey">
                <div className="text">Cancel bookings</div>
                <div className="number">1</div>
              </div>
            </div>
            <span className="mypink">Regular customer</span>
            <div className="mytotal">
              <div className="text">Total spending</div>
              <div className="number">$35,718</div>
            </div>
            <div className="mytotal">
              <div className="text">Average spending</div>
              <div className="number">$262.63</div>
            </div>
          </div>
          <div className="tbl-detail">
            <div className="title">Regular services</div>
            <div className="tbl-wrapper">
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ position: ['bottomCenter'] }}
              />
            </div>
          </div>
        </div>
        <div className="group-button-bottom-fixed">
          <Button htmlType="button" className="mybutton fullwidth" size="large" href="/profile">
            Save
          </Button>
        </div>
        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default LanguagesPage
