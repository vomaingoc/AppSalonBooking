import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/booking.scss'
import { Image, Button, Row, Col, Divider, Avatar, Select, Modal, Checkbox } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import type { RangePickerProps } from 'antd/es/date-picker'
import moment from 'moment'
import { CloseOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
const { Option } = Select
const formatDateTime = 'ddd, MM/DD/YYYY h:mm A'

function CreateBookingAddServicesPage() {
  const [quanlity, setQuanlity] = useState(1)
  const onChangeQuantityUp = () => {
    setQuanlity((prev) => prev + 1)
  }
  const onChangeCheckbox = (checkedValues: CheckboxValueType[]) => {
    const arr: any = []
    for (let i = 0; i < checkedValues.length; i++) {
      arr.push(checkedValues[i])
    }
    setCheckedList(arr)
  }
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([])
  const onChangeQuantityDown = () => {
    if (quanlity === 1) return
    setQuanlity((prev) => prev - 1)
  }
  const init = [
    {
      id: 41,
      title: 'DESIGN (ADD ON)',
      description: 'addons',
      imagePath: 'https://media.igonail.comurl',
      price: 5,
      duration: 15,
      type: 'ADDONS',
      status: 'ACTIVE',
      createdAt: '2022-05-25T09:14:58.160Z',
      updateAt: '2022-09-18T10:46:28.810Z',
      serviceCategoryId: 6,
      salonId: 1,
      salon: {
        id: 1,
        name: 'VLINK NAIL - Westchase',
        phoneNumber: '(346)-802-4906',
        phoneNumber2: '(346)-802-4906',
        qrCode:
          'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=%27salon=1%27&chld=L%7C1&choe=UTF-8',
        description: '',
        avatar: 'https://media.igonail.com/v1/images/a42609f5-9e69-4fc3-bb4e-774f10f27dfe.png',
        website: '',
        address: '9793 Westheimer, Suite A, Houston , TX 77042',
        country: 'VIET NAM',
        city: 'HO CHI MINH',
        district: 'Quan 12',
        ward: 'HCM',
        zipCode: '10000',
        latitube: 50,
        longitube: 50,
        mapURL: null,
        status: 'ACTIVE',
        createdAt: '2022-05-25T08:49:12.930Z',
        updatedAt: '2022-05-25T08:49:12.930Z',
      },
    },
    {
      id: 253,
      title: 'GEL POLISH ONLY (ADD ON)',
      description: null,
      imagePath: 'https://media.igonail.com/v1/images/3df3c5f5-6ac7-4b58-ad46-44025c308849.png',
      price: 20,
      duration: 45,
      type: 'ADDONS',
      status: 'ACTIVE',
      createdAt: '2022-05-25T09:14:58.160Z',
      updateAt: '2022-05-25T09:14:58.160Z',
      serviceCategoryId: 6,
      salonId: 2,
      salon: {
        id: 2,
        name: 'VLINK NAIL - Sugar Land',
        phoneNumber: '(281)-903-7556',
        phoneNumber2: '(281)-903-7556',
        qrCode:
          'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=%27salon=2%27&chld=L%7C1&choe=UTF-8',
        description: '',
        avatar: 'https://media.igonail.com/v1/images/266248aa-2a8c-44ff-8173-9c8f147bef73.jpg',
        website: '',
        address: '11753 S Texas 6, Sugar Land, TX 77498',
        country: 'VIET NAM',
        city: 'HO CHI MINH',
        district: 'Quan 12',
        ward: 'HCM',
        zipCode: '10000',
        latitube: 50,
        longitube: 50,
        mapURL: null,
        status: 'ACTIVE',
        createdAt: '2022-05-25T08:53:34.023Z',
        updatedAt: '2022-05-25T08:53:34.023Z',
      },
    },
    {
      id: 281,
      title: '3 OR MORE COLORS',
      description: null,
      imagePath: 'https://media.igonail.com/v1/images/3df3c5f5-6ac7-4b58-ad46-44025c308849.png',
      price: 5,
      duration: 45,
      type: 'ADDONS',
      status: 'ACTIVE',
      createdAt: '2022-05-25T09:14:58.160Z',
      updateAt: '2022-05-25T09:14:58.160Z',
      serviceCategoryId: 9,
      salonId: 2,
      salon: {
        id: 2,
        name: 'VLINK NAIL - Sugar Land',
        phoneNumber: '(281)-903-7556',
        phoneNumber2: '(281)-903-7556',
        qrCode:
          'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=%27salon=2%27&chld=L%7C1&choe=UTF-8',
        description: '',
        avatar: 'https://media.igonail.com/v1/images/266248aa-2a8c-44ff-8173-9c8f147bef73.jpg',
        website: '',
        address: '11753 S Texas 6, Sugar Land, TX 77498',
        country: 'VIET NAM',
        city: 'HO CHI MINH',
        district: 'Quan 12',
        ward: 'HCM',
        zipCode: '10000',
        latitube: 50,
        longitube: 50,
        mapURL: null,
        status: 'ACTIVE',
        createdAt: '2022-05-25T08:53:34.023Z',
        updatedAt: '2022-05-25T08:53:34.023Z',
      },
    },
    {
      id: 294,
      title: 'mai demo addon',
      description: 'mai demo addon',
      imagePath: 'url',
      price: 5,
      duration: 15,
      type: 'ADDONS',
      status: 'ACTIVE',
      createdAt: '2022-09-15T01:20:27.057Z',
      updateAt: '2022-09-15T01:20:27.057Z',
      serviceCategoryId: 1,
      salonId: 1,
      salon: {
        id: 1,
        name: 'VLINK NAIL - Westchase',
        phoneNumber: '(346)-802-4906',
        phoneNumber2: '(346)-802-4906',
        qrCode:
          'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=%27salon=1%27&chld=L%7C1&choe=UTF-8',
        description: '',
        avatar: 'https://media.igonail.com/v1/images/a42609f5-9e69-4fc3-bb4e-774f10f27dfe.png',
        website: '',
        address: '9793 Westheimer, Suite A, Houston , TX 77042',
        country: 'VIET NAM',
        city: 'HO CHI MINH',
        district: 'Quan 12',
        ward: 'HCM',
        zipCode: '10000',
        latitube: 50,
        longitube: 50,
        mapURL: null,
        status: 'ACTIVE',
        createdAt: '2022-05-25T08:49:12.930Z',
        updatedAt: '2022-05-25T08:49:12.930Z',
      },
    },
    {
      id: 1292,
      title: 'demo sony',
      description: 'demo sony',
      imagePath: 'https://media.igonail.com/v1/images/564724ae-84e1-4fa7-ad13-747383197a21.png',
      price: 20,
      duration: 20,
      type: 'ADDONS',
      status: 'ACTIVE',
      createdAt: '2022-09-21T16:24:28.087Z',
      updateAt: '2022-09-21T16:24:28.087Z',
      serviceCategoryId: 2,
      salonId: 1,
      salon: {
        id: 1,
        name: 'VLINK NAIL - Westchase',
        phoneNumber: '(346)-802-4906',
        phoneNumber2: '(346)-802-4906',
        qrCode:
          'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=%27salon=1%27&chld=L%7C1&choe=UTF-8',
        description: '',
        avatar: 'https://media.igonail.com/v1/images/a42609f5-9e69-4fc3-bb4e-774f10f27dfe.png',
        website: '',
        address: '9793 Westheimer, Suite A, Houston , TX 77042',
        country: 'VIET NAM',
        city: 'HO CHI MINH',
        district: 'Quan 12',
        ward: 'HCM',
        zipCode: '10000',
        latitube: 50,
        longitube: 50,
        mapURL: null,
        status: 'ACTIVE',
        createdAt: '2022-05-25T08:49:12.930Z',
        updatedAt: '2022-05-25T08:49:12.930Z',
      },
    },
  ]
  const [addons, setAddons] = useState(init)
  const handleChangeSelect = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleAtToBooking = () => {
    setIsModalOpen(false)
  }
  return (
    <Layout>
      <div className="app-page" style={{ background: '#fff' }}>
        <div className="search-tool search-tool--service">
          <Row>
            <Col span={3}>
              <Button type="text" size="large" shape="circle" icon={<CloseOutlined />}></Button>
            </Col>
            <Col span={21}>
              <Select
                style={{ width: '100%' }}
                onChange={handleChangeSelect}
                placeholder="Search by name, product ..."
                allowClear
                size="large"
                showSearch
                optionFilterProp="children"
                className="fullwidth"
              >
                <Option value="Services 1">Services 1</Option>
                <Option value="Services 2">Services 2</Option>
                <Option value="Services 3">Services 3</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div className="app-content">
          <div className="title">Category name1</div>
          <div className="list-service">
            <div className="item active" onClick={showModal}>
              <div className="icon-checked">
                <Checkbox defaultChecked={true}></Checkbox>
              </div>
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item" onClick={showModal}>
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item active">
              <div className="icon-checked">
                <Checkbox defaultChecked={true}></Checkbox>
              </div>
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          </div>
          <div className="title">Category name1</div>
          <div className="list-service">
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          </div>

          <div className="title">Category name1</div>
          <div className="list-service">
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          </div>

          <div className="title">Category name1</div>
          <div className="list-service">
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <div className="item">
              <Row gutter={6}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={
                      <Image src="https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg" />
                    }
                  />
                </Col>
                <Col>
                  <div className="name">3x Polish Change Hands</div>
                  <div className="price">$15.00</div>
                </Col>
              </Row>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          </div>
        </div>
        <div className="group-button-bottom-fixed">
          <Button
            htmlType="button"
            className="mybutton fullwidth"
            size="large"
            href="/booking-salon-step-3"
          >
            <Row style={{ justifyContent: 'space-between' }}>
              <Col>5 items</Col>
              <Col>$95.00</Col>
            </Row>
          </Button>
        </div>
        <div className="group-button-bottom-fixed-lbl"></div>
      </div>

      <Modal
        title={
          <div>
            <Row gutter={16} style={{ flexWrap: 'nowrap' }}>
              <Col>
                <Avatar
                  size={48}
                  shape="square"
                  icon={
                    <Image
                      preview={false}
                      src={
                        'https://media.igonail.com/v1/images/c6a1df4a-a38e-467b-841e-09691af0336f.jpg'
                      }
                      // alt={service?.title}
                      // fallback={imgService}
                    />
                  }
                />
              </Col>

              <Col>
                <div className="title">
                  <span className="number" style={{ color: '#2E90FA', marginRight: 6 }}>
                    {quanlity}x
                  </span>
                  <span className="ttc">French Tips | Color Tips</span>
                </div>
                <div className="price" style={{ fontWeight: 'bold' }}>
                  $15.00
                </div>
              </Col>
            </Row>
            <div className="quanlity-number not-show">
              <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    shape="circle"
                    icon={<MinusCircleOutlined />}
                    onClick={onChangeQuantityDown}
                  />
                </Col>
                <Col>
                  <b style={{ fontSize: '20px', padding: '0 12px' }}>{quanlity}</b>
                </Col>
                <Col>
                  <Button
                    type="link"
                    size="large"
                    shape="circle"
                    icon={<PlusCircleOutlined />}
                    onClick={onChangeQuantityUp}
                  />
                </Col>
              </Row>
            </div>
          </div>
        }
        focusTriggerAfterClose
        wrapClassName="modal-detail-service"
        // closable={false}
        transitionName=""
        open={isModalOpen}
        // mask={false}
        getContainer={'.salon-app'}
        onOk={handleOk}
        maskClosable
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            className="mybutton fullwidth"
            onClick={handleAtToBooking}
            size="large"
          >
            <Row style={{ justifyContent: 'space-between' }}>
              <Col>Add to booking</Col>
              <Col>$15.00</Col>
            </Row>
          </Button>,
        ]}
      >
        <label htmlFor="">Add-on:</label>
        <Checkbox.Group style={{ width: '100%' }} onChange={onChangeCheckbox} value={checkedList}>
          {addons.map((item: any) => (
            <Row key={item.id} style={{ justifyContent: 'space-between' }}>
              <Col style={{ marginTop: 10 }} className="ttc">
                <Checkbox value={item.id}>{item.title.toLowerCase()}</Checkbox>
              </Col>
              <Col style={{ color: '#CA8504' }}>${item.price.toFixed(2)}</Col>
            </Row>
          ))}
        </Checkbox.Group>
      </Modal>
    </Layout>
  )
}

export default CreateBookingAddServicesPage
