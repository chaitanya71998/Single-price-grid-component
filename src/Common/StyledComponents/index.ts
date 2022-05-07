import styled from "styled-components"
import { Colors } from "../../Colors"
import { HeadingText, DescriptionText } from "../../Typo"
import { desktop } from "../../Utils/ResponsiveUtils"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${Colors.cyan2};
  padding: 24px 20px;
  ${desktop} {
    padding: 32px;
  }
`

export const Heading = styled(HeadingText)`
  color: ${Colors.cyan};
  text-align: left;
`

export const CardDescription = styled(DescriptionText)`
  color: ${Colors.grayishBlue};
  margin-top: 16px;
`
