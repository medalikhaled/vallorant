import {Navigation, MobileNav, Drop, Menu, Button} from "../styles/Navigation";
import DropDown from "../assets/dropDown.svg";

import { BsFillFilePersonFill } from "react-icons/bs";
import { CgMenuHotdog } from "react-icons/cg";
import { GiSwitchWeapon } from "react-icons/gi";
import { FiMap, FiPlus } from "react-icons/fi";
import avatar from "../assets/lamaavatar.png";


function Nav() {
  return (
    <>
    <Navigation>
        <ul>
            <li>
                <CgMenuHotdog />
                <h4>Browse</h4>
            </li>
            <li>
                <BsFillFilePersonFill />
                <h4>Agents</h4>
            </li>
            <li>
                <GiSwitchWeapon />
                <h4>Weapons</h4>
            </li>
            <li>
                <FiMap />
                <h4>Weapons</h4>
            </li>
        </ul>

        <div>
            <Button>
                <FiPlus />
                Create
            </Button>
            <button className="btn">
                <img src={avatar} alt=""/>
            </button>
        </div>
    </Navigation>

    <MobileNav>
        <Drop src={DropDown} alt="drop down menu" />
    </MobileNav>
    
    <Menu>
            {/* drop down menu list */}
    </Menu>

    </>
  )
}

export default Nav