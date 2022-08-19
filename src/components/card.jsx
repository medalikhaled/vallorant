import {Image, CardContainer} from "../styles/card"


function card({agent}) {
  return (
    <CardContainer>
        <Image src={agent.fullPortrait} alt={`${agent.displayName} Portrait`} />
        <h2>{agent.displayName}</h2>
    </CardContainer>
     
  )
}

export default card