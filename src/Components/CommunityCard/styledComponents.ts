import styled from "styled-components"

import { Colors } from "../../Colors"
import { HeadingText, DescriptionText } from "../../Typo"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${Colors.white};
  padding: 24px 20px;
`

export const CardHeading = styled(HeadingText)`
  color: ${Colors.cyan};
  text-align: left;
`

export const CardSubHeading = styled(DescriptionText)`
  color: ${Colors.brightYellow};
  text-align: left;
  margin-top: 20px;
`

export const CardDescription = styled(DescriptionText)`
  color: ${Colors.grayishBlue};
  margin-top: 16px;
`
