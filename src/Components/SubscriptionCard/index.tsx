import React from "react"
import {
  AmountText,
  AmountTextSuffix,
  CardContainer,
  CardHeading,
  SignUpButton,
  SubscriptionWrapper,
  Description,
} from "./styledComponents"

interface SubscriptionProps {}

class Subscription extends React.Component<SubscriptionProps> {
  render() {
    return (
      <CardContainer>
        <CardHeading>Monthly Subscription</CardHeading>
        <SubscriptionWrapper>
          <AmountText>$29</AmountText>
          <AmountTextSuffix>per month</AmountTextSuffix>
        </SubscriptionWrapper>
        <Description> Full access for less than $1 a day</Description>
        <SignUpButton>Sign Up</SignUpButton>
      </CardContainer>
    )
  }
}

export default Subscription
