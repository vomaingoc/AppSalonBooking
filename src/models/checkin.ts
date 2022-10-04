import { ModelSeat } from 'models/booking'
import { ModelSalon } from 'models/salon'
export interface ModelCheckin {
  bookingId: number
  checkInAt: string
  checkOutAt: string | null
  createdAt: string
  id: number
  salon: ModelSalon
  status: string
  updatedAt: string
  userId: number
  waitingNumber: number
  seat: ModelSeat
}
