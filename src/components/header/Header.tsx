import dataImg from './../../assets/icon/date.svg'
import searchImg from './../../assets/icon/search.svg'
import ProfileImg from './../../assets/img/Profile.png'

import styles from './Header.module.css'

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<h2 className={styles.header__title}>Todolist</h2>
			<div className={styles.header__item}>
				<img src={searchImg} />
				<img src={dataImg} />
				<span>19 May 2022</span>
				<img src={ProfileImg} />
			</div>
		</div>
	)
}

export default Header
