import React from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/favorite.scss'
import { Rate, Row, Col, Divider, Avatar, Image } from 'antd'
import imgSalon1 from 'assets/images/salon1.jpg'
import { ClockCircleOutlined } from '@ant-design/icons'
import MenuBottom from './components/MenuBottom'
function FavoritePage() {
  return (
    <Layout>
      <div className="app-page">
        <div className="app-header-control">
          <div className="inner">
            <div className="title">Favorite</div>
          </div>
        </div>
        <div className="list-favorite">
          <div className="item">
            <Row>
              <Col span={6}>
                <Avatar shape="square" size={76} src={<Image src={imgSalon1} />} />
              </Col>
              <Col span={18}>
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
                    <Row gutter={8}>
                      <Col className="icon">
                        <ClockCircleOutlined />
                      </Col>
                      <Col>8 AM - 8 PM</Col>
                      <Col style={{ color: 'green' }} className="salon-status">
                        Opening
                      </Col>
                    </Row>
                    <span className="icon-heart active">
                      <span className="s1">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99452 1.79639C6.39504 -0.169562 3.7278 -0.698398 1.72376 1.10183C-0.280285 2.90205 -0.562426 5.91194 1.01136 8.04107C2.31985 9.8113 6.27982 13.5448 7.57768 14.7533C7.72288 14.8885 7.79549 14.9561 7.88017 14.9826C7.95408 15.0058 8.03496 15.0058 8.10887 14.9826C8.19356 14.9561 8.26616 14.8885 8.41136 14.7533C9.70922 13.5448 13.6692 9.8113 14.9777 8.04107C16.5515 5.91194 16.3038 2.88312 14.2653 1.10183C12.2268 -0.679461 9.594 -0.169562 7.99452 1.79639Z"
                            fill="#F97066"
                          />
                        </svg>
                      </span>
                      <span className="s2">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99452 2.79639C7.39504 0.830438 4.7278 0.301602 2.72376 2.10183C0.719715 3.90205 0.437574 6.91194 2.01136 9.04107C3.31985 10.8113 7.27982 14.5448 8.57768 15.7533C8.72288 15.8885 8.79549 15.9561 8.88017 15.9826C8.95408 16.0058 9.03496 16.0058 9.10887 15.9826C9.19356 15.9561 9.26616 15.8885 9.41136 15.7533C10.7092 14.5448 14.6692 10.8113 15.9777 9.04107C17.5515 6.91194 17.3038 3.88312 15.2653 2.10183C13.2268 0.320539 10.594 0.830438 8.99452 2.79639Z"
                            stroke="#F97066"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <div className="item">
            <Row>
              <Col span={6}>
                <Avatar shape="square" size={76} src={<Image src={imgSalon1} />} />
              </Col>
              <Col span={18}>
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
                    <Row gutter={8}>
                      <Col className="icon">
                        <ClockCircleOutlined />
                      </Col>
                      <Col>8 AM - 8 PM</Col>
                      <Col style={{ color: 'green' }} className="salon-status">
                        Opening
                      </Col>
                    </Row>
                    <span className="icon-heart active">
                      <span className="s1">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99452 1.79639C6.39504 -0.169562 3.7278 -0.698398 1.72376 1.10183C-0.280285 2.90205 -0.562426 5.91194 1.01136 8.04107C2.31985 9.8113 6.27982 13.5448 7.57768 14.7533C7.72288 14.8885 7.79549 14.9561 7.88017 14.9826C7.95408 15.0058 8.03496 15.0058 8.10887 14.9826C8.19356 14.9561 8.26616 14.8885 8.41136 14.7533C9.70922 13.5448 13.6692 9.8113 14.9777 8.04107C16.5515 5.91194 16.3038 2.88312 14.2653 1.10183C12.2268 -0.679461 9.594 -0.169562 7.99452 1.79639Z"
                            fill="#F97066"
                          />
                        </svg>
                      </span>
                      <span className="s2">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99452 2.79639C7.39504 0.830438 4.7278 0.301602 2.72376 2.10183C0.719715 3.90205 0.437574 6.91194 2.01136 9.04107C3.31985 10.8113 7.27982 14.5448 8.57768 15.7533C8.72288 15.8885 8.79549 15.9561 8.88017 15.9826C8.95408 16.0058 9.03496 16.0058 9.10887 15.9826C9.19356 15.9561 9.26616 15.8885 9.41136 15.7533C10.7092 14.5448 14.6692 10.8113 15.9777 9.04107C17.5515 6.91194 17.3038 3.88312 15.2653 2.10183C13.2268 0.320539 10.594 0.830438 8.99452 2.79639Z"
                            stroke="#F97066"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <div className="item">
            <Row>
              <Col span={6}>
                <Avatar shape="square" size={76} src={<Image src={imgSalon1} />} />
              </Col>
              <Col span={18}>
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
                    <Row gutter={8}>
                      <Col className="icon">
                        <ClockCircleOutlined />
                      </Col>
                      <Col>8 AM - 8 PM</Col>
                      <Col style={{ color: 'green' }} className="salon-status">
                        Opening
                      </Col>
                    </Row>
                    <span className="icon-heart">
                      <span className="s1">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99452 1.79639C6.39504 -0.169562 3.7278 -0.698398 1.72376 1.10183C-0.280285 2.90205 -0.562426 5.91194 1.01136 8.04107C2.31985 9.8113 6.27982 13.5448 7.57768 14.7533C7.72288 14.8885 7.79549 14.9561 7.88017 14.9826C7.95408 15.0058 8.03496 15.0058 8.10887 14.9826C8.19356 14.9561 8.26616 14.8885 8.41136 14.7533C9.70922 13.5448 13.6692 9.8113 14.9777 8.04107C16.5515 5.91194 16.3038 2.88312 14.2653 1.10183C12.2268 -0.679461 9.594 -0.169562 7.99452 1.79639Z"
                            fill="#F97066"
                          />
                        </svg>
                      </span>
                      <span className="s2">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99452 2.79639C7.39504 0.830438 4.7278 0.301602 2.72376 2.10183C0.719715 3.90205 0.437574 6.91194 2.01136 9.04107C3.31985 10.8113 7.27982 14.5448 8.57768 15.7533C8.72288 15.8885 8.79549 15.9561 8.88017 15.9826C8.95408 16.0058 9.03496 16.0058 9.10887 15.9826C9.19356 15.9561 9.26616 15.8885 9.41136 15.7533C10.7092 14.5448 14.6692 10.8113 15.9777 9.04107C17.5515 6.91194 17.3038 3.88312 15.2653 2.10183C13.2268 0.320539 10.594 0.830438 8.99452 2.79639Z"
                            stroke="#F97066"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
        </div>
        <MenuBottom itemActive={3} />
      </div>
    </Layout>
  )
}

export default FavoritePage
