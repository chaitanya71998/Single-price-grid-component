import CommunityCard from "../CommunityCard"
import Details from "../Details"
import Subscription from "../SubscriptionCard"
import {
  MainContainer,
  ContainerWrapper,
  PriceCardAndWhyUsCardWrapper,
} from "./styledComponents"

export const SinglePriceCard = () => {
  return (
    <ContainerWrapper>
      <MainContainer>
        <CommunityCard />
        <PriceCardAndWhyUsCardWrapper>
          <Subscription />
          <Details />
        </PriceCardAndWhyUsCardWrapper>
      </MainContainer>
    </ContainerWrapper>
  )
}
