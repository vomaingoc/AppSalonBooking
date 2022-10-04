import React, { useState } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/booking.scss'
import {
  Image,
  Carousel,
  Button,
  Row,
  Col,
  Rate,
  DatePicker,
  Input,
  TimePicker,
  Divider,
} from 'antd'
import imgSlide from 'assets/images/slide1.jpg'
import type { DatePickerProps } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  ArrowLeftOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import moment from 'moment'
import { TIME_SALON } from 'helpers/constants'
const formatDateTime = 'ddd, MM/DD/YYYY h:mm A'
const formatDate = 'MM/DD/YYYY'
const formatTime = 'h:mm A'
function CreateBookingAddTechPage() {
  const [quanlity, setQuanlity] = useState(1)
  const onChangeQuantityUp = () => {
    setQuanlity((prev) => prev + 1)
  }
  const onChangeQuantityDown = () => {
    if (quanlity === 1) return
    setQuanlity((prev) => prev - 1)
  }
  var d1 = new Date()
  var d2 = new Date(d1)
  d2.setMinutes(d1.getMinutes() + 8)
  const initdate = new Date(d2)
  const [bookingTime, setBookingTime] = useState(initdate)
  const onChangeDate: DatePickerProps['onChange'] = (date: any, dateString: string) => {
    setBookingTime(moment(date).toDate())
  }
  const onChangeTime = (time: any, timeString: string) => {
    console.log(time, timeString)
    setBookingTime(moment(time).toDate())
  }
  const range = (start: number, end: number) => {
    const result = []
    for (let i = 0; i < start; i++) {
      result.push(i)
    }
    for (let j = end; j < 24; j++) {
      result.push(j)
    }
    return result
  }
  const disabledDateTime = () => ({
    disabledHours: () => range(TIME_SALON.open, TIME_SALON.close),
  })

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    let customDate = moment().format(formatDateTime)
    return current && current < moment(customDate, formatDateTime)
  }
  return (
    <Layout>
      <div className="app-page">
        <div className="slide-salon-lbl"></div>
        <div className="slide-salon">
          <div className="slide-salon-images">
            <Carousel autoplay>
              <div className="item-slide">
                <Image
                  src={imgSlide}
                  style={{ width: '100%' }}
                  rootClassName="img-slide"
                  preview={false}
                />
              </div>
              <div className="item-slide">
                <Image
                  src={imgSlide}
                  style={{ width: '100%' }}
                  rootClassName="img-slide"
                  preview={false}
                />
              </div>
              <div className="item-slide">
                <Image
                  src={imgSlide}
                  style={{ width: '100%' }}
                  rootClassName="img-slide"
                  preview={false}
                />
              </div>
            </Carousel>
          </div>

          <div className="tool-top">
            <span>
              <Button icon={<ArrowLeftOutlined />} shape="circle" href="/"></Button>
            </span>
            <span>
              <Button icon={<HeartOutlined />} shape="circle"></Button>
            </span>
          </div>
          <div className="salon-infor">
            <Row className="row1">
              <Col>
                <div className="salon-name">Pasta Louise</div>
              </Col>
              <Col>
                <div className="rating">
                  <span className="rateting-icon">
                    <Rate allowHalf defaultValue={4.5} />
                  </span>
                  <span>4.3</span>
                </div>
              </Col>
            </Row>
            <div className="salon-address">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33332C12.5 6.95261 11.3807 5.83332 10 5.83332C8.6193 5.83332 7.50001 6.95261 7.50001 8.33332C7.50001 9.71404 8.6193 10.8333 10 10.8333Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33332C16.6667 4.65142 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65142 3.33334 8.33332C3.33334 12.0152 6.66668 15 10 18.3333Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>471 5th Ave, Brooklyn, NY 11215, USA</span>
            </div>
            <div className="salon-wokingtime">
              <span className="icon">
                <ClockCircleOutlined />
              </span>
              <span>8 AM - 8 PM</span>
              <span style={{ color: 'green' }} className="salon-status">
                Opening
              </span>
            </div>
          </div>
        </div>
        <div
          className="app-content"
          style={{ background: '#f9fafb', position: 'relative', zIndex: '2' }}
        >
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl1">Number of guest</div>
            </Col>
            <Col>
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
                    <b style={{ fontSize: '16px', padding: '0 8px' }}>{quanlity}</b>
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
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl1">Date</div>
            </Col>
            <Col span={12}>
              {/* <DatePicker
                name="date"
                id="date"
                format={formatDate}
                popupClassName="picker-lg"
                onChange={onChangeDate}
                showTime
                disabledDate={disabledDate}
                value={moment(bookingTime)}
                size="large"
              /> */}
              <Input
                placeholder="Enter birthday"
                size="large"
                type="date"
                className="my-input-lg"
              />
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Col>
              <div className="lbl1">Time</div>
            </Col>
            <Col span={10}>
              {/* <TimePicker
                className=""
                minuteStep={5}
                disabledTime={disabledDateTime}
                onChange={onChangeTime}
                format={formatTime}
                name="time"
                use12Hours={true}
                id="time"
                value={moment(bookingTime)}
                size="large"
              /> */}
              <Input
                placeholder="Enter birthday"
                size="large"
                type="time"
                className="my-input-lg"
              />
            </Col>
          </Row>
          <Divider style={{ marginTop: 12 }} />

          <div className="section">
            <Row style={{ justifyContent: 'space-between' }}>
              <Col>
                <div className="section__title">Select prefered artist</div>
              </Col>
              <Col>
                <div className="optional">Optional</div>
              </Col>
            </Row>

            <div className="list-technician">
              <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image
                        src={
                          'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                        }
                        rootClassName="img-tech"
                        preview={false}
                      />
                      <div className="icon-check">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="12" fill="#1570EF" />
                          <path
                            d="M7.5 12L10.5 15L16.5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text">
                      <div className="text1">Phoenix Baker</div>
                      <div className="text2">
                        <div className="rating rating--2">
                          <span className="rateting-icon">
                            <Rate allowHalf defaultValue={4.9} />
                          </span>
                          <span>4.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image
                        src={
                          'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                        }
                        rootClassName="img-tech"
                        preview={false}
                      />
                      <div className="icon-check">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="12" fill="#1570EF" />
                          <path
                            d="M7.5 12L10.5 15L16.5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text">
                      <div className="text1">Phoenix Baker</div>
                      <div className="text2">
                        <div className="rating rating--2">
                          <span className="rateting-icon">
                            <Rate allowHalf defaultValue={4.9} />
                          </span>
                          <span>4.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image
                        src={
                          'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                        }
                        rootClassName="img-tech"
                        preview={false}
                      />
                      <div className="icon-check">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="12" fill="#1570EF" />
                          <path
                            d="M7.5 12L10.5 15L16.5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text">
                      <div className="text1">Phoenix Baker</div>
                      <div className="text2">
                        <div className="rating rating--2">
                          <span className="rateting-icon">
                            <Rate allowHalf defaultValue={4.9} />
                          </span>
                          <span>4.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image
                        src={
                          'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                        }
                        rootClassName="img-tech"
                        preview={false}
                      />
                      <div className="icon-check">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="12" fill="#1570EF" />
                          <path
                            d="M7.5 12L10.5 15L16.5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text">
                      <div className="text1">Phoenix Baker</div>
                      <div className="text2">
                        <div className="rating rating--2">
                          <span className="rateting-icon">
                            <Rate allowHalf defaultValue={4.9} />
                          </span>
                          <span>4.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="group-button-bottom-fixed">
          <Button
            htmlType="button"
            className="mybutton fullwidth"
            size="large"
            href="/booking-salon-step-2"
          >
            Next
          </Button>
        </div>
        <div className="group-button-bottom-fixed-lbl"></div>
      </div>
    </Layout>
  )
}

export default CreateBookingAddTechPage
