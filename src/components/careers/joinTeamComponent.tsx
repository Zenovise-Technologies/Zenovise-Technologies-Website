import React from 'react'
import styles from './careers.module.scss'

const JoinTeamComponent = () => {
  return (
    <div className={styles.joinTeamMainWrapper}>
      <div className={styles.innerCardWrapper}>
        <p className={styles.innerCardText}>Share your Resume/CV at :</p>
        <a href='/' className={styles.innerCardSubLink}>hr@zenovise.in</a>
      </div>
      <div className={styles.innerCardWrapper}>
        <p className={styles.innerCardText}>Chat with us on :</p>
        <a href='/' className={styles.innerCardSubLink}>+91 90230 31034</a>
      </div>
    </div>
  )
}

export default JoinTeamComponent
