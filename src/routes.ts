import React from 'react'
const HomePage = React.lazy(() => import('pages/Home'))
const SigninPage = React.lazy(() => import('pages/Singin'))
const SignupPage = React.lazy(() => import('pages/Singup'))
const FogotPasswordPage = React.lazy(() => import('pages/FogotPassword'))
const SetNewPasswordPage = React.lazy(() => import('pages/SetNewPassword'))
const FogotPasswordSendCodePage = React.lazy(() => import('pages/FogotPasswordSendCode'))
const PasswordResetPage = React.lazy(() => import('pages/PasswordReset'))
const CreateBookingAddTechPage = React.lazy(() => import('pages/CreateBookingAddTech'))
const CreateBookingAddServices = React.lazy(() => import('pages/CreateBookingAddServices'))
const CreateBookingRecap = React.lazy(() => import('pages/CreateBookingRecap'))
const Bookings = React.lazy(() => import('pages/Bookings'))
const BookingDetail = React.lazy(() => import('pages/BookingDetail'))
const Favorite = React.lazy(() => import('pages/Favorite'))
const Profile = React.lazy(() => import('pages/Profile'))
const Languages = React.lazy(() => import('pages/ProfileLanguages'))
const ProfileChangePassword = React.lazy(() => import('pages/ProfileChangePassword'))
const ProfileInformation = React.lazy(() => import('pages/ProfileInformation'))
const ProfileStatistic = React.lazy(() => import('pages/ProfileStatistic'))
const QRScan = React.lazy(() => import('pages/QRScan'))
const routes: Array<{
  path: string
  name?: string
  title?: string
  exact?: boolean
  component?: any
  useAuthLayout?: boolean
  useAdminLayout?: boolean
  roles?: any
}> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    title: 'Home',
    useAuthLayout: false,
  },
  {
    path: '/signin',
    name: 'SigninPage',
    component: SigninPage,
    title: 'Signin',
    useAuthLayout: false,
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
    title: 'Signup',
    useAuthLayout: false,
  },
  {
    path: '/forgot-password',
    name: 'FogotPasswordPage',
    component: FogotPasswordPage,
    title: 'Fogot Password',
    useAuthLayout: false,
  },
  {
    path: '/new-password',
    name: 'SetNewPasswordPage',
    component: SetNewPasswordPage,
    title: 'SetNewPassword',
    useAuthLayout: false,
  },
  {
    path: '/forgot-password-code',
    name: 'FogotPasswordSendCode',
    component: FogotPasswordSendCodePage,
    title: 'FogotPasswordSendCode',
    useAuthLayout: false,
  },
  {
    path: '/password-reset',
    name: 'PasswordReset',
    component: PasswordResetPage,
    title: 'PasswordReset',
    useAuthLayout: false,
  },
  {
    path: '/booking-salon-step-1',
    name: 'CreateBookingAddTechPage',
    component: CreateBookingAddTechPage,
    title: 'CreateBookingAddTechPage',
    useAuthLayout: false,
  },
  {
    path: '/booking-salon-step-2',
    name: 'CreateBookingAddServices',
    component: CreateBookingAddServices,
    title: 'CreateBookingAddServices',
    useAuthLayout: false,
  },
  {
    path: '/booking-salon-step-3',
    name: 'CreateBookingRecap',
    component: CreateBookingRecap,
    title: 'CreateBookingRecap',
    useAuthLayout: false,
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings,
    title: 'Bookings',
    useAuthLayout: false,
  },
  {
    path: '/bookings/:id',
    name: 'BookingDetail',
    component: BookingDetail,
    title: 'BookingDetail',
    useAuthLayout: false,
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite,
    title: 'Favorite',
    useAuthLayout: false,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    title: 'Profile',
    useAuthLayout: false,
  },
  {
    path: '/languages',
    name: 'Languages',
    component: Languages,
    title: 'Languages',
    useAuthLayout: false,
  },
  {
    path: '/change-password',
    name: 'ProfileChangePassword',
    component: ProfileChangePassword,
    title: 'ProfileChangePassword',
    useAuthLayout: false,
  },
  {
    path: '/information',
    name: 'ProfileInformation',
    component: ProfileInformation,
    title: 'ProfileInformation',
    useAuthLayout: false,
  },
  {
    path: '/statistic',
    name: 'ProfileStatistic',
    component: ProfileStatistic,
    title: 'ProfileStatistic',
    useAuthLayout: false,
  },
  {
    path: '/qrscane',
    name: 'QRScan',
    component: QRScan,
    title: 'QRScan',
    useAuthLayout: false,
  },
  //QRScan
]
export { routes }
