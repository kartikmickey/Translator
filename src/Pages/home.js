import React from "react"
// import Menu from "../component/menu"
import Languageoption from '../Components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Menu from "../Components/menu"
import './home.css';
const Home = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('homeH1')}</h1>
            <h2>{t('homeH2')}</h2>
            <h3>{t('homeH31')}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-LdO6spV8KVMXqt_PG1oxppf5LZOX9G4DT6YU7KwcdBJe5ytZUSY8urydxK_nPKkyZU&usqp=CAU"/>
           <p>{t('p1')}</p>
           <h3>{t('homeH32')}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq2GXjcCSi4aFKy0rRaOD9YLV5A07JW6BLg&usqp=CAU"/>
           <p>{t('p2')}</p>

           <h3>{t('homeH33')}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5D0jjPzbQ8bj-j3MhPNOx9mxXl5yjZy_zFA&usqp=CAU"/>
           <p>{t('p3')}</p>

           <h3>{t('homeH34')}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbdfjdHC34fwiLU9aVf4fPeoVkE2eyO0SlA&usqp=CAU"/>
           <p>{t('p4')}</p>

           <h3>{t('homeH35')}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtDnsC8ss5rtRuJk5AUvx9tha8R1lZPRAkw&usqp=CAU"/>
           <p>{t('p5')}</p>
          <span></span>
            </div>
        
    )
}
export default Home