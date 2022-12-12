import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Layout({ children }: any) {
    return (
        <>
            <div className={styles.navbar}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            {children}
            <div className={styles.footer}>
                <ul>
                    <li>footer</li>
                </ul>
            </div>
        </>
    )
}

export default Layout