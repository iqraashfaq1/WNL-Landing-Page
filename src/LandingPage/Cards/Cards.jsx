import React from 'react'
import {Button} from 'reactstrap'
import styles from './Cards.module.scss';


const Cards = ({Image, paraDate,paraName,paraType}) => {
    return (
    
            <div className={styles.main_cont}>
                                 <img className={styles.main_images} src={Image} alt="Image" />
                                <p className={styles.date}>{paraDate}</p>
                                <p className={styles.name}>{paraName}</p>
                                <p className={styles.type}>{paraType}</p>
                                <Button>Register Now</Button>
                                
                            </div>
        
    )
}

export default Cards
