import bkg from '../assets/background.mp4';
import { MainContainer, Video, Container}  from '../styles/main';
import Sidebar from "./Sidebar";
import Rest from './rest';   



function Main() {
  return (
    <>    
        <Video autoPlay muted loop>
            <source src={bkg} type="video/mp4" />
        </Video>

        <Container> 
            <MainContainer>
                <Sidebar />
                <Rest />
            </MainContainer>
        </Container>
    </>

  )
}

export default Main;