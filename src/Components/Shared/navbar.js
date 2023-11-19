import HamBurIcon from '../../images/hamburIcon.png'
import youtubeLogo from '../../images/youtube.png'
import search from '../../images/search1.png'
import './navCss.css'
import person from '../../images/person.png'

import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../utils/sidebarSlice'

const Header = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = () =>{
    console.log("hello")
      dispatch(toggleMenu())
  }

  return (
    <>
      <div className='navSet mx-3'>
        <ul className='navUl'> 
            <img src={HamBurIcon} className='navImg' onClick={()=>toggleMenuHandler()}/> 
             <a href='#'><img src={youtubeLogo} className='navLogo' /></a>
            <li className='navList ml-4 rounded-lg'> <input type="text" className="navSearch" placeholder='Search'/></li>
            {/* <li className='navList ml-4 rounded-lg'> <img src={search} className='navImg'/> </li> */}
          </ul>

          <ul className='navUl'> 
          <li className='navList'> <img src={person} className='navImg'/></li>
          </ul>

      </div>
    </>
  )
}

export default Header