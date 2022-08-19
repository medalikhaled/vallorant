import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {useState, useEffect} from 'react'
import Card from './card'
import Nav from './nav'
import {CardsContainer, RestContainer} from "../styles/card"
import "../App.css"


function Rest() {
  const [agents, setAgents] = useState([]);
  const [isMobile, setIsMobile] = useState(false)
  
  const x = window.matchMedia("(max-width: 768px)")

  useEffect(() => {
    if(x.matches){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [x])

  async function getAgents() {
    const res = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`);
    const data = await res.json();
    localStorage.setItem('agents', JSON.stringify(data));
    setAgents(data.data);
  }

  useEffect(() => {
    if(localStorage.agents) {
      const data = JSON.parse(localStorage.getItem('agents'));
      setAgents(data.data);
    } 
    else {
      getAgents();
    }
  },[isMobile, x])


  return (  
    <RestContainer>
      <Nav />
      <CardsContainer>
        <h1>Agents</h1>
        {/* add auto play to the slider */}
        <Splide         
        aria-label='Valorant Characters Slider'
        options={{
          perPage: isMobile ? 1 : 5,
          rewind: true,
          gap: '1rem',
          arrows: false,
          pagination: false,
          
        }}>
          
            {agents.map(agent => 
              <SplideSlide key={agent.uuid}>
                <div className='card-container'>
                  <Card agent={agent}/> 
                </div>
              </SplideSlide>
            )}

        </Splide>
      </CardsContainer>

    </RestContainer>
  )
}

export default Rest

