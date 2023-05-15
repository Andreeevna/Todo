import Header from '../header/Header'
import styles from './Layout.module.css'

export type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>{children && <div>{children}</div>}</div>
		</>
	)
}

export default Layout
