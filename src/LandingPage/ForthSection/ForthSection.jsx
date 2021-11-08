import React from 'react'
import {Row,Col} from 'reactstrap'
import styles from './ForthSection.module.scss'

const ForthSection = () => {
    return (
        <div className={styles.main_cont_div}>
            <hr/>

            <Row className={styles.main_cont}>
                <Col sm={12} md={6} className={styles.left_col}>
                   
                        
                            <p>Powered by Sundae</p>
                        
                </Col>
                <Col sm={12} md={6} className={styles.right_col}>
               <div className={styles.right_side}>
               <p>Terms and Conditions</p>
                    <p>Privacy  Policy</p>
               </div>
                   
                       
                </Col>
            </Row>
        </div>
        
    )
}

export default ForthSection
