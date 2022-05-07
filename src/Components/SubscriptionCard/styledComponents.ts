import styled from "styled-components"
import { Colors } from "../../Colors"
import { MainContainer } from "../../Common/StyledComponents"
import { HeadingText, DescriptionText } from "../../Typo"
import { desktop } from "../../Utils/ResponsiveUtils"

export const CardContainer = styled(MainContainer)`
  background-color: ${Colors.cyan3};
  ${desktop} {
    width: 50%;
  }
`

export const CardHeading = styled(HeadingText)`
  color: ${Colors.white};
  text-align: right;
`

export const SignUpButton = styled.button`
  height: 38px;
  background-color: ${Colors.brightYellow};
  width: 100%;
  margin-top: 24px;
  box-shadow: 5px 10px 5px 1px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 5px 10px 5px 1px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 5px 10px 5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border: none;
  color: ${Colors.white};
`

export const AmountText = styled(HeadingText)`
  font-size: 26px;
  margin-right: 16px;
  color: ${Colors.white};
`

export const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`

export const AmountTextSuffix = styled(DescriptionText)`
  color: ${Colors.white};
  font-size: 12px;
`

export const Description = styled(DescriptionText)`
  color: ${Colors.white};
`
