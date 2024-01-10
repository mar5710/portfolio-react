import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
			<nav className='nav'>
				<div className='container'>
					<div className='nav-row'>
						<Link to='/' className='logo'>
							<strong>Freelancer</strong> portfolio
						</Link>
						<BtnDarkMode/>
						<ul className='nav-list'>
							<li className='nav-list__item'>
								<Link
									to='/'
									className='nav-list__link nav-list__link--active'
								>
									Home
								</Link>
							</li>
							<li className='nav-list__item'>
								<Link to='/projects' className='nav-list__link'>
									Projects
								</Link>
							</li>
							<li className='nav-list__item'>
								<Link to='/contacts' className='nav-list__link'>
									Contacts
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
}
 
export default Navbar;