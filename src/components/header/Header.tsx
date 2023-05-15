import cn from 'classnames'

import dataImg from './../../assets/icon/date.svg'
import searchImg from './../../assets/icon/search.svg'
import ProfileImg from './../../assets/img/Profile.png'

import s from './../layout/Layout.module.css'
import styles from './Header.module.css'

const Header: React.FC = () => {
	return (
		<div className={styles.wrapper__header}>
			<div className={cn(styles.header, s.wrapper)}>
				<h1 className={styles.header__title}>Todolist</h1>
				<div className={styles.header__item}>
					<img src={searchImg} />
					<img src={dataImg} />
					<span>19 May 2022</span>
					<img className={styles.header__img} src={ProfileImg} />
				</div>
			</div>
		</div>
	)
}

export default Header
