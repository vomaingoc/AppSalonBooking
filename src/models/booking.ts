import { ModelUserInfo } from 'models/user'
export interface ModelBookingServiceDetail {
  id: number
  serviceId: number
  staffId: number
  price: number
  time: number
  note: string
  createdAt: Date
  updatedAt: Date
  parentId: number
}
export interface ModelBookingServices extends Array<ModelBookingServiceDetail> {}
export interface ModelBookings extends Array<ModelBooking> {}

export interface ModelBooking {
  id: number
  userId: number
  salonId: number
  bookingTime: string
  note: string
  totalPrice: 0
  status: string
  createdAt: string
  updatedAt: string
  bookingServices: ModelBookingServices
  user: ModelUserInfo
  numberOfGuest: number
  bill: {
    id: number
    userId: number
    tips: number
    tax: number
    discount: number
    productDiscount: number
    serviceDiscountPercent: number
    productDiscountPercent: number
    isBirthdayDiscountApplied: boolean
    isGroupDiscountApplied: boolean
    total: number
    productAmount: number
    cash: number
    creditTransactionId: string
    paymentMethod: string
    createdAt: string
    updatedAt: string
    createUserId: number
  }
}
export interface ModelSeat {
  id: number
  createdAt: string
  description: string
  name: string
  position: string
  seatNumber: string
  status: string
  updateAt: string
}
export interface ModelCheckin {
  id: number
  bookingId: number
  checkInAt: string
  checkOutAt: string
  createdAt: string
  seat: ModelSeat
  status: string
  updatedAt: string
  userId: number
  waitingNumber: number
}
export interface ModelBill {
  bookingId: number
  userId: number
  tips: number
  tax: number
  disCount: number
  total: number
  paymentMethod: string
}
