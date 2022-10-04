export interface ModelServiceCategory {
  id: number
  title: string
  description: string
  imagePath: string
  status: boolean
  createdAt: string
  updateAt: string
  salonId: number
  type: string
  duration: string
  serviceCategoryId: number
  serviceCategory: ModelServiceCategoryDump
}

export interface ModelServiceCategoryDump {
  id: number
  title: string
  imageUrl: string
  description: string
}

export interface ModelServiceItem {
  name: string
  price: number
  id: number
  cateId: number
  duration: number
}
