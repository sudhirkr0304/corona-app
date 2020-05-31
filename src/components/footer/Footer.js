import React from 'react'
import styles from './Footer.module.css'


class Footer extends React.Component
{
    render()
    {
        return(
            <div className={styles.container}>
                <p>@copy; 2020 by sudhir kumar</p>
            </div>
        );
    }
}

export default Footer;