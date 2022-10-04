import React from 'react'
import { Outlet, Link } from 'react-router-dom'
function MenuBottom(props: any) {
  const { itemActive } = props
  const color1 = '#667085'
  const color2 = '#CA8504'
  return (
    <>
      <div className="lbl-menu-bottom"></div>
      <div className="menu-bottom">
        <Link className={`item ${itemActive === 1 ? 'active' : ''}`} to="/">
          <div className="icon">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 20V12.6C7 12.04 7 11.7599 7.10899 11.546C7.20487 11.3579 7.35785 11.2049 7.54601 11.109C7.75992 11 8.03995 11 8.6 11H11.4C11.9601 11 12.2401 11 12.454 11.109C12.6422 11.2049 12.7951 11.3579 12.891 11.546C13 11.7599 13 12.04 13 12.6V20M9.0177 1.76403L2.23539 7.03916C1.78202 7.39178 1.55534 7.56809 1.39203 7.78889C1.24737 7.98447 1.1396 8.20481 1.07403 8.43908C1 8.70355 1 8.99073 1 9.56508V16.8C1 17.9201 1 18.4802 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4802 19 17.9201 19 16.8V9.56508C19 8.99073 19 8.70355 18.926 8.43908C18.8604 8.20481 18.7526 7.98447 18.608 7.78889C18.4447 7.56809 18.218 7.39178 17.7646 7.03916L10.9823 1.76403C10.631 1.49078 10.4553 1.35415 10.2613 1.30163C10.0902 1.25529 9.9098 1.25529 9.73865 1.30163C9.54468 1.35415 9.36902 1.49078 9.0177 1.76403Z"
                stroke={itemActive === 1 ? color2 : color1}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text">Home</div>
        </Link>
        <Link className={`item ${itemActive === 2 ? 'active' : ''}`} to="/bookings">
          <div className="icon">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8.5L7 10.5L11.5 6M15 19V5.8C15 4.11984 15 3.27976 14.673 2.63803C14.3854 2.07354 13.9265 1.6146 13.362 1.32698C12.7202 1 11.8802 1 10.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V19L8 15L15 19Z"
                stroke={itemActive === 2 ? color2 : color1}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text">Booking</div>
        </Link>
        <Link className={`item ${itemActive === 3 ? 'active' : ''}`} to="/favorite">
          <div className="icon">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9932 4.13581C8.9938 1.7984 5.65975 1.16964 3.15469 3.31001C0.649644 5.45038 0.296968 9.02898 2.2642 11.5604C3.89982 13.6651 8.84977 18.1041 10.4721 19.5408C10.6536 19.7016 10.7444 19.7819 10.8502 19.8135C10.9426 19.8411 11.0437 19.8411 11.1361 19.8135C11.2419 19.7819 11.3327 19.7016 11.5142 19.5408C13.1365 18.1041 18.0865 13.6651 19.7221 11.5604C21.6893 9.02898 21.3797 5.42787 18.8316 3.31001C16.2835 1.19216 12.9925 1.7984 10.9932 4.13581Z"
                stroke={itemActive === 3 ? color2 : color1}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text">Favorite</div>
        </Link>

        <Link className={`item ${itemActive === 4 ? 'active' : ''}`} to="/profile">
          <div className="icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
                stroke={itemActive === 4 ? color2 : color1}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text">Profile</div>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default MenuBottom
