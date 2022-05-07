import React from "react"
import { CardContainer, CardDescription, CardHeading } from "./styledComponents"

interface DetailsProps {}

class Details extends React.Component<DetailsProps> {
  render() {
    return (
      <CardContainer>
        <CardHeading>Why Us</CardHeading>
        <CardDescription>
          Tutorials by industry experts Peer & expert code review Coding
          exercises Access to our GitHub repos Community forum New videos every
          week
        </CardDescription>
      </CardContainer>
    )
  }
}

export default Details
