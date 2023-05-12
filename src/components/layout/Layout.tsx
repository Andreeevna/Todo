import styles from './Layout.module.scss'

export type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>{children && <div>{children}</div>}</div>
	)
}

export default Layout
