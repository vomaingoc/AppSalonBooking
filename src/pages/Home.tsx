import React, { useEffect } from 'react'
import Layout from 'layouts/MainLayout'
import 'assets/globalStyles/home.scss'
import { Select, Image, Carousel } from 'antd'
import MenuBottom from 'pages/components/MenuBottom'
import imgSlide from 'assets/images/slide1.jpg'
import imgSalon1 from 'assets/images/salon1.jpg'
import imgSalon2 from 'assets/images/salon2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const { Option } = Select
function HomePage() {
  const handleChangeSelect = (value: string) => {
    console.log(`selected ${value}`)
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)
    })
  }
  useEffect(() => {
    getLocation()
  }, [])

  return (
    <Layout>
      <div className="home-page">
        <div className="app-header">
          <div className="app-header__inner">
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
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33332C16.6667 4.65142 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65142 3.33334 8.33332C3.33334 12.0152 6.66668 15 10 18.3333Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>471 5th Ave, Brooklyn, NY 11215, USA</span>
            </div>
            <div className="search-tool">
              <Select
                style={{ width: '100%' }}
                onChange={handleChangeSelect}
                size="large"
                placeholder="Search..."
                allowClear
                showSearch
                optionFilterProp="children"
              >
                <Option value="Services 1">Services 1</Option>
                <Option value="Services 2">Services 2</Option>
                <Option value="Services 3">Services 3</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="app-header-lbl"></div>
        <div className="app-content">
          <div className="section">
            <div className="slide-home">
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
          </div>
          <div className="section">
            <div className="section__title">Recommended for you</div>
            <div className="list-salon">
              <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="item">
                    <a className="image" href="/booking-salon-step-1">
                      <Image src={imgSalon1} rootClassName="img-salon" preview={false} />
                    </a>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <a className="image" href="/booking-salon-step-1">
                      <Image src={imgSalon2} rootClassName="img-salon" preview={false} />
                    </a>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image src={imgSalon2} rootClassName="img-salon" preview={false} />
                    </div>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Near me</div>
            <div className="list-salon">
              <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image src={imgSalon1} rootClassName="img-salon" preview={false} />
                    </div>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image src={imgSalon2} rootClassName="img-salon" preview={false} />
                    </div>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="image">
                      <Image src={imgSalon2} rootClassName="img-salon" preview={false} />
                    </div>
                    <div className="text">
                      <div className="text1">Pasta Louise</div>
                      <div className="text2">
                        <span>1114 8th Ave</span>
                        <span>2.4 km</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <MenuBottom itemActive={1} />
      </div>
    </Layout>
  )
}

export default HomePage
