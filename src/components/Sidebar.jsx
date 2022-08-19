import {NavContainer, Image} from "../styles/nav"
import { IconContext } from "react-icons";
import { GiBatBlade} from 'react-icons/gi';
import { AiFillHome} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import {HiDotsHorizontal} from 'react-icons/hi';
import valo from "../assets/valo.png"
import lol from "../assets/lol.png"
import csgo from "../assets/csgo.png"


function Sidebar() {
  return (
    <NavContainer>
      <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
          <GiBatBlade style={{ cursor: 'pointer', marginBottom: '1rem' }}/>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: 'rgba(168, 173, 202, 1)', size: '1.5rem'}}>
        <AiFillHome  style={{ cursor: 'pointer'}}/>
        <FaUserFriends style={{ cursor: 'pointer'}}/>
        <HiDotsHorizontal style={{cursor: 'pointer'}}/>
      </IconContext.Provider>

      <Image src={valo} alt="Valorant Logo" />
      <Image src={lol} alt="League of legends Logo" />
      {/* <Image src={csgo} alt="League of legends Logo" /> */}


    </NavContainer>
  )
}

export default Sidebar;