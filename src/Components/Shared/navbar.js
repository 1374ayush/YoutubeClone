import HamBurIcon from '../../images/hamburIcon.png'
import youtubeLogo from '../../images/youtube.png'
import search from '../../images/search1.png'
import person from '../../images/person.png'

import './navCss.css'

const Header = () => {

  return (
    <>
      <nav className='navSet'>
        <ul className='navUl'> 
            <img src={HamBurIcon} className='navImg' /> 
             <img src={youtubeLogo} className='navLogo' />
            <li className='navList ml-4 rounded-lg'> <input type="text" className="navSearch"/></li>
            {/* <li className='navList ml-4 rounded-lg'> <img src={search} className='navImg'/> </li> */}
          </ul>

          <ul className='navUl'> 
          <li className='navList'> <img src={person} className='navImg mx-3'/></li>
          </ul>

      </nav>
    </>
  )
}

export default Header