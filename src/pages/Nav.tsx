import styles from './Nav.module.css'
export function Nav() {
  return (
    <div className={styles.box}>
      <nav className={styles.nav}>
        <a href=''>HTML</a>
        <a href=''>CSS</a>
        <a href=''>JavaScript</a>
      </nav>
    </div>
  )
}
