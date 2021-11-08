import React from 'react'
import {Row,Col} from 'reactstrap'
import Card1 from '../../../Assets/Images/LandingPage/rectangle.png'
import Card2 from '../../../Assets/Images/LandingPage/rectangle.png'
import Card3 from '../../../Assets/Images/LandingPage/rectangle.png'
import Card4 from '../../../Assets/Images/LandingPage/rectangle.png'
import Card5 from '../../../Assets/Images/LandingPage/rectangle.png'
import styles from './TwoSection.module.scss'
import Cards from '../../../Components/LandingPage/Cards/Cards'



const imgArray = [ Card1, Card2 ,Card3, Card4 , Card5 ]

const TwoSection =  () => {
    return (
        
          <div className={`${styles.main_container_div} gx-0`} >
            <Row className={`${styles.main_container} gx-0`}>
                <Col lg={12} sm={12} md={12} >
                    <div className={styles.main_cont_area}>
                        <div className={styles.li_cont}>
                            <ul>
                                <li>Workshops</li>
                                <li>Resources</li>
                                <li>Quizzes</li>
                            </ul>
                        </div>
                        <div className={styles.main_card_cont}>
                         <Row>
                             {
                                 Array(5).fill().map(function(item, index){
                                     console.log(imgArray[index])
                                     return(
                                         <Col lg={3} sm={6} md={3}>
                                        <Cards Image={imgArray[index]}  paraDate={"October 21, 2021"} paraName={<p>Introduction to <br /> Pronunication</p>} paraType={"Free"} /> 
                                        </Col>
                                     )
                                 })
                             }
                         </Row>
                      
                        </div>
                    </div>
                </Col>
            </Row>
</div>
        
    )
}

export default TwoSection
