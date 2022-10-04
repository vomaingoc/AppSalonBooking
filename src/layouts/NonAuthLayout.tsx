import React from 'react'

type Props = {
  children?: React.ReactNode
}

type States = {
  pageLoading: boolean
}

class NonAuthLayout extends React.Component<Props, States> {
  constructor(props: Props | Readonly<Props>) {
    super(props)

    this.state = {
      pageLoading: false,
    }
  }
  componentDidMount() {}
  public render() {
    const { children } = this.props

    return <>{children}</>
  }
}

export default NonAuthLayout
