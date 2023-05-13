import React from 'react'


import {BsYoutube} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiVidiconLine} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {VscFileSymlinkDirectory} from 'react-icons/vsc'
import {RiFilePaper2Line} from 'react-icons/ri'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {CgGames} from 'react-icons/cg'
import "../Header/Header.css"

import {Link,useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
import '../SingelPage/SinglePage.css'

function Header() {
    const [newsData, setNewsData] = useState([]);


    
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': 'b2408dab06msh37e16875a7de12ep13947cjsn3dc7783b74c8',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    const fetch = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.items);
        setNewsData(response.data.items);
    
      } catch (error) {
        // console.error(error);
      }
    
    }
    
        
    useEffect(() => {
        fetch()
        
      },[])
    const [color , setColor] = useState(false);
    const handleChange = ()=>{
    setColor(!color)
    
    } 
    const [displayB , setDisplayB] = useState(false);
    const handleChange2 = ()=>{
    setDisplayB(!displayB)
    } 
    const [displayB2 , setDisplayB2] = useState(false);
    const handleChange3 = ()=>{
    setDisplayB2(!displayB2)
    } 
    
       const id = useParams();
 
    
    return (
        
        <>
        <div className={color ? 'dark' : 'white'}>
         <header>
         <nav className='NavBar__nav'>
                <div className='container'>
                     <div className='NavBar__nav__div'>
                     <button onClick={handleChange2} className='change-btn'><RxHamburgerMenu className='hamburger'/></button>
                         
                         <div className='navBar_nav_logo'>
                             <BsYoutube className='logotip'/>
                             <span className='NavBar__nav__logo__span'>YouTube</span>
                         </div>
                         <form method='POST' className='NavBar__nav__div__form'>
                             <div className='NavBar__nav__div__form__inp'>
                                 <input type='text' placeholder='Search' className='search'/>
                                 <AiOutlineSearch className='inpSerchImg'/>
                             </div>
                         </form>
                         <div className='NavBar_nav__companents'>
                             <RiVidiconLine className='vidio'/>
                             <TbGridDots className='dots'/>
                             <IoMdNotificationsOutline className='notification'/>
                             <RxAvatar className='person'/>
                         </div>
                     </div>

                </div>     
                </nav>            
            <div className='hero'>
            <div className={displayB ? 'dislayNone ' : 'dislayBlock'}>
            <div className='container'>
            <div className='sidebar'>
                     <div>
                         <div className='home'>   
                             <Link to="/" className='home__link'><AiOutlineHome className='home__img'/> Home</Link>
                         </div>
                         <div className='trending'>
                             <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/>Trending</Link>
                         </div>
                         <div className='Subscriptions'>
                             <Link to="/Subscriptions" className='Subscriptions__link'><MdOutlineSubscriptions className='Subscriptions__img'/>Subscriptions</Link>
                         </div>
                     </div>
                     <div>
                         <div className='Library'>
                             <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/>Library</Link>
                         </div>
                         <div className='History'>
                             <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/>History</Link>
                         </div>
                         <div className='Watch'>
                             <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/>Watch</Link>
                         </div>
                         <div className='Favourites'>
                             <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/>Favourites</Link>
                         </div>
                         <div className='Like'>
                             <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/>Liked videos</Link>
                         </div>
                         <div className='Music'>
                             <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/>Music</Link>
                         </div>
                         <div className='Games'>
                             <Link to="/Games" className='Games__link'><CgGames className='Games__img'/>Games</Link>
                         </div>
                         <button onClick={handleChange} className='change-btn'>DarkMode/LightMode</button>
                         <div>
                         <button onClick={handleChange3} className='change-btn'>Right Sidebar</button>
                         </div>
                     </div>
        </div>  
        <div className='sidebar__bottom'>
                     <div className='sidebar__bottom__1 grid gap-5 grid-cols-9'>
                             <div className='home'>   
                                 <Link to="/" className='home__link'><AiOutlineHome className='home__img'/></Link>
                             </div>
                             <div className='trending'>
                                 <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/></Link>
                             </div>
                             <div className='Subscriptions'>
                                 <Link to="/Subscriptions" className='Subscriptions__link'><MdOutlineSubscriptions className='Subscriptions__img'/></Link>
                             </div>
                             <div className='Library'>
                                <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/></Link>
                             </div>
                             <div className='History'>
                                <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/></Link>
                             </div>
                             <div className='Watch'>
                                <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/></Link>
                             </div>
                             <div className='Favourites'>
                                <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/></Link>
                             </div>
                             <div className='Like'>
                                <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/></Link>
                             </div>
                             <div className='Music'>
                                <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/></Link>
                             </div>
                             <div className='Games'>
                                <Link to="/Games" className='Games__link'><CgGames className='Games__img'/></Link>
                             </div>
                             <div className='darkMode'>
                             <button onClick={handleChange} className='change-btn'>DarkMode/LightMode</button>

                             </div>

                        </div>
        </div>
                 </div>
                  </div>
                  
                  <div className="iframe-all">
                    
                  <div className="iframeDiv">
                  <iframe className="Single-iframe" src={`https://www.youtube.com/embed/${id.id} `} />
                  {/* <p className='MapP'>{`id.channelTitle`}</p>
              <span className='Span'>{`id.title`}</span>
              <span>publishTime<data>{`id.publishTime`}</data></span>
                 </iframe> */}
                 
                 <div className="iframe-texts">
             
                   
                 </div>
                  </div>

                  <div className='sidebar-right'>
                  <div className='MapMainDiv2'>
                  <div className='MApMidleDiv2 grid gap-5 grid-cols-12'>
                  <div className={displayB2 ? 'dislayNone ' : 'dislayBlock'}>
                  {
                    
                    newsData.slice(0,5).map((element) => (
                          <div className='Map'  key={element.id.videoId}>
                         <Link to={`news/${element.id.videoId}`} className='Map__link'>
            
                         <img src={element.snippet.thumbnails.medium.url} alt="img" />
                          <p className='MapP'>{element.snippet.channelTitle}</p>
                          <span className='Span'>{element.snippet.title}</span>
                          <span>publishTime<data>{element.snippet.publishTime}</data></span>
                          </Link>
                          </div>
                          
                      
                      ))
                   }
                  </div>
                  </div>
                  </div>
        </div>
        <div className='MapMainDiv3'>
        <div className='MApMidleDiv3 grid gap-5 grid-cols-12'>
        {
        newsData.slice(0,50).map((element) => (
              <div className='Map'  key={element.id.videoId}>
             <Link to={`news/${element.id.videoId}`} className='Map__link'>

             <img src={element.snippet.thumbnails.medium.url} alt="img" />
              <p className='MapP'>{element.snippet.channelTitle}</p>
              <br></br>
              <span className='Span'>{element.snippet.title}</span>
              <br/>
              <span>publishTime<data>{element.snippet.publishTime}</data></span>
              </Link>
              </div>
              
          
          ))
       }
        </div>
        </div>
                  </div>
                
                
                </div>
          
        </header> 
       {/* <div className="settings">
            <div className='Setting'>
             <Link to="/Setting" className='Setting__link'><AiFillSetting className='Setting__img'/>Setting</Link>
             </div>
       </div> */}

        </div>
        </>
      )
}

export default Header 
