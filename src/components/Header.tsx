import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <div className={styles['header-container']}>
        <div className={styles['game-header-container']}>
          <div className={styles['game-banner-container']}>
            <h1 className={styles['game-banner']}>The Ultimate Game</h1>
            <button className={styles['nav-button']}>▼</button>
          </div>
        </div>
    </div>
  )
}

export default Header