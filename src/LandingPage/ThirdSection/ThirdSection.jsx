import React from 'react'
import {Row,Col} from 'reactstrap'
import Girl from '../../../Assets/Images/LandingPage/girl.png'
import styles from './ThirdSection.module.scss'

const ThirdSection = () => {
    return (
        
             <div  className={styles.main_cont_div}>
            <Row className={styles.main_cont}>
                <Col sm={12} md={6} className={styles.left_side}>
                    <div >
                        <h1>Meet your instructor</h1>
                        <br/>
                        <p>Hi! I’m Abbie and I'm a GCSE and A-Level French & Spanish teacher. Over the last 3 years, I’ve helped hundreds of students learn French & Spanish more effectively, improve their exam technique, and achieve top grades in their examinations.
<br/>
<br/>
            I’m on a mission to help students fulfil their French & Spanish learning goals while creating affordable ways to access this education. I have launched live workshops and knowledge packed resources to help you achieve your goals of achieving top grades.
<br/>
<br/>
            Why not let me start helping you ACE your exams! Come join me!  </p>
                    </div>
                </Col>
                <Col sm={12} md={6} className={styles.right_side}>
                
                        <img src={Girl} alt="Image"/>
                    
                </Col>
                
            </Row>
        </div>
    )
}

export default ThirdSection
