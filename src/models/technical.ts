import { ModelUserInfo } from 'models/user'

export interface ModelTechnical {
  id: number
  name: string
  imageUrl: string
  position: string
  phone: string
  turnOnDay: number
}

export interface ModelTech {
  id: number
  staffCode: string
  salonId: number
  userId: number
  socialSecurityCode: string
  nickName: string
  TipPercentage: number
  commissionPercentage: number
  minimumPay: number
  isBookingOnline: boolean
  ordering: number
  status: string
  user: ModelUserInfo
  roleId: number
}
export interface ModelCreateTech {
  staffCode: string
  salonId: number
  role: number
  userId: number
  socialSecurityCode: string
  nickName: string
  TipPercentage: number
  commissionPercentage: number
  minimumPay: number
  isBookingOnline: number
}
