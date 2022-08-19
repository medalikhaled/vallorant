import {StatsContainer, FooterContainer, Disc} from "../styles/footer";
import valorant from '../assets/valorant.png'

function Footer() {
  return (
    <FooterContainer>
        <Disc>

        </Disc>
        <StatsContainer>
            <img src={valorant} alt="" />

        </StatsContainer>
    </FooterContainer>
  )
}

export default Footer