import "./style.css"
import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../utils/useLocalStorage"
import detectDarkMode from "../../utils/detectDarkMode"


const BtnDarkMode = () => {

	const [darkMode,setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

	const btnRef = useRef(null)

	useEffect(() => {
		if(darkMode === 'dark'){
			document.body.classList.add('dark')
			btnRef.current.classList.add('dark-mode-btn--active')
		}else {
			document.body.classList.remove('dark')
			btnRef.current.classList.remove('dark-mode-btn--active')
		}
	},[darkMode])

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', event => {
				const newColorScheme = event.matches ? 'dark' : 'light'
				setDarkMode(newColorScheme)
			})
	},[setDarkMode])


	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}


   return (
			<button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
				<img
					src='./img/icons/sun.svg'
					alt='Light mode'
					className='dark-mode-btn__icon'
				/>
				<img
					src='./img/icons/moon.svg'
					alt='Dark mode'
					className='dark-mode-btn__icon'
				/>
			</button>
		)
}
 
export default BtnDarkMode;
