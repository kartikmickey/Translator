import React from "react"
import Languageoption from "../Components/language-dropdown"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Menu from "../Components/menu"
import './About.css';

const Aboutus = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
   
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            {/* <h1>{t('about')} || Seema {t('holiday')} Developer</h1> */}
            <section className="abouta about section" id="about">

<div className="max-width">
<h2 className="title">{t('title')}</h2>
<div className="about-content">
    <div className="column left">
        <img className="home-img" src="https://avatars.githubusercontent.com/u/112502020?v=4" alt="kartikmickey"/>
    </div>
    <div className="column right">
        <div  id="user-detail-name" className="text">{t('text')}
        </div>
        <p id="user-detail-intro" >{t('bio')}
</p>
   </div>
</div>
</div>
</section>
        </div>
       
    )
}
export default Aboutus