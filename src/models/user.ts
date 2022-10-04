export interface ModelUserLogin {
  user: ModelUserInfo
  accessToken: string
  username: string
  id: number
}
export interface ModelUserProfile {
  id: number
  firstName: string
  lastName: string
  dialCode: string
  phoneNumber: string
  email: string
  avatar: string
  birthDay: string
  gender: string
  address: string
  country: string
  city: string
  district: string
  ward: string
  state: string
  zipCode: string
  userType: string
}

export interface ModelUserInfo {
  id: number
  username: string
  slug: string
  nodeAddress: string
  parentId: string
  profile: ModelUserProfile
  deletionReason: null
  isLocked: boolean
  isVerified: boolean
  language: string
  passwordChangedAt: string
  status: string
  updatedAt: string
  userType: string
  verifiedEmailAt: string
  verifiedPhoneAt: string
}

export interface ModelUserMemberShip {
  Id: string
  FirstName: string
  LastName: string
  Email: string
  Username: string
  MemberCode: string
  Role: string
  Status: string
  DialCode: string
  PhoneNumber: string
  Gender: string
  Address: string
  BirthDay: string
  MemberCard: {
    Id: string
    MemberCode: string
    Type: string
    Status: string
    CreditPerMonth: number
    Credit: number
    Point: number
    Circle: number
    ActivateDate: string
    ExpiredDate: string
    Renewal: null
    IsAutoRenewal: true
    MemberCardTypeId: string
    MemberCardType: {
      Id: string
      Type: string
      PricePerMonth: number
      BonusCreditPerMonth: number
      BirthdayDiscount: number
      ProductDiscount: number
      GroupDiscount: number
      IntroduceBonus: number
      ServiceBonus: number
      FullYearDiscount: number
      Description: string
      Photo: string
    }
  }
  SalonId: string
  CreditWallet: {
    Id: string
    Amount: number
    Status: string
  }
}
