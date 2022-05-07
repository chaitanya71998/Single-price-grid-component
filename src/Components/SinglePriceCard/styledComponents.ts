import styled from "styled-components"
import { Colors } from "../../Colors"
import { desktop } from "../../Utils/ResponsiveUtils"

export const MainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 360px;
  border-radius: 4px;
  height: fit-content;
  overflow: hidden;
  ${desktop} {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const PriceCardAndWhyUsCardWrapper = styled.div`
  width: 100%;
  ${desktop} {
    display: flex;
  }
`
