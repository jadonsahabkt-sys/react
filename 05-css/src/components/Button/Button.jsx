import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <div>
      <h1 className={styles['header-title']}>Karan Thakur</h1>
      <button className={styles['btn']}>View Profile</button>
    </div>
  )
}

export default Button
