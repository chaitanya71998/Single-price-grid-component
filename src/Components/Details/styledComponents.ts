import styled from "styled-components"
import { Colors } from "../../Colors"
import { MainContainer } from "../../Common/StyledComponents"
import { HeadingText, DescriptionText } from "../../Typo"
import { desktop } from "../../Utils/ResponsiveUtils"

export const CardContainer = styled(MainContainer)`
  background-color: ${Colors.cyan2};
  justify-content: flex-start;
  ${desktop} {
    width: 50%;
  }
`

export const CardHeading = styled(HeadingText)`
  color: ${Colors.white};
  text-align: left;
`

export const CardDescription = styled(DescriptionText)`
  color: ${Colors.white};
  margin-top: 16px;
`
