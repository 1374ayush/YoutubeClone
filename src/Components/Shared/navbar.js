import HamBurIcon from "../../images/hamburIcon.png";
import youtubeLogo from "../../images/youtube.png";
import "./navCss.css";
import person from "../../images/person.png";
import axios from "axios";
import { youtube_search_api } from "../../constants/youttubeSearchApi.js";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/sidebarSlice";
import { useEffect, useState } from "react";
import { addCache } from "../../utils/searchSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("")
  const [searchData, setSearchData] = useState([])
  const [searchBlock, setSearchBlock] = useState(false)
  //console.log(searchVal);
  const searchCache = useSelector((store) => store.search)

  const toggleMenuHandler = () => {
    console.log("hello");
    dispatch(toggleMenu());
  };
  //Debouncing for search functionality.
  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchVal]){
        setSearchData(searchCache[searchVal])
      }else{
        //call Api if searchVal is not cached in store
        searchSuggestions()
      }
    }
    , 200)
    return () => clearTimeout(timer)
  }, [searchVal]);

  const searchSuggestions = () => {
    //calling an Api for search suggesstion
    console.log("Api Called")
    axios
      .get(youtube_search_api + searchVal)
      .then((response) => {
        setSearchData(response.data[1])

        //update the cache.
        dispatch(addCache(
          {
            [searchVal]:response.data[1]
          }
        ))

        console.log(searchData)
      })
      .catch((err) => console.log(err))
  };

  return (
    <>
      <div className="navSet mx-3">
        <ul className="navUl">
          <img
            src={HamBurIcon}
            className="navImg"
            onClick={() => toggleMenuHandler()}
          />
          <a href="#">
            <img src={youtubeLogo} className="navLogo" />
          </a>
          <li className="navList ml-4 rounded-lg">
            <input
              type="text"
              className="navSearch"
              placeholder="Search"
              onChange={(e) => setSearchVal(e.target.value)}
              onFocus={() => setSearchBlock(true)}
              onBlur={() => {setSearchBlock(false); setSearchVal("")}}
            />

            {searchBlock && <div className="searchSuggestion py-2">
              <ul className="searchSuggestionUl">
                {searchData.map((item, index) => (
                  <li className="searchSuggestionLi px-2" key={index}>
                    <div className="searchContent">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>}
          </li>

          {/* <li className='navList ml-4 rounded-lg'> <img src={search} className='navImg'/> </li> */}
        </ul>

        <ul className="navUl">
          <li className="navList">
            {" "}
            <img src={person} className="navImg" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
