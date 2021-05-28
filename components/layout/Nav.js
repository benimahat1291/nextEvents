import Link from 'next/link'
import React from 'react'
import styles from "./Nav.module.css"

const Nav = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">All Events</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav
