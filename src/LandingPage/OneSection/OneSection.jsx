import React from 'react'
import {Row,Col} from 'reactstrap'
import styles from './OneSection.module.scss'
import Image from '../../../Assets/Images/LandingPage/image.png'
import Logo from '../../../Assets/Images/LandingPage/logo.png'
import SectionTwo from '../../LandingPage/TwoSection/TwoSection'
import SectionThird from '../../LandingPage/ThirdSection/ThirdSection'
import SectionForth from '../../LandingPage/ForthSection/ForthSection'

const OneSection = () => {
    return (
        <div>
            <Row className={`${styles.main_container} gx-0`}>
          
                <Col  md={6} lg={6} sm={12} xs={12} className={styles.left_col}>
                <img  src={Logo} alt="Image" /> 
               <h1>Why Not Languages</h1>
            
            <p>
            The new & exciting way to  learn0 GCSE & A Level French <br/>& Spanish! Why not let me start helping you ACE your exams! <br/>
            Come join me!

            </p>
               
                </Col>
              
              <Col  md={6} lg={6} sm={12} xs={12} className={styles.right_col}>
              <img src={Image} alt="Image" />
                </Col>
              
             
            </Row>
             <SectionTwo/> 
            <SectionThird/>
            <SectionForth/> 

            
        </div>
        
    )
}

export default OneSection
