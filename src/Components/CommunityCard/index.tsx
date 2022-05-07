import React from "react"
import {
  CardContainer,
  CardDescription,
  CardHeading,
  CardSubHeading,
} from "./styledComponents"

interface CommunityCardProps {}

class CommunityCard extends React.Component<CommunityCardProps> {
  render() {
    return (
      <CardContainer>
        <CardHeading>Join our community</CardHeading>
        <CardSubHeading>
          30-day, hassle-free money back guarantee
        </CardSubHeading>
        <CardDescription>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </CardDescription>
      </CardContainer>
    )
  }
}

export default CommunityCard
