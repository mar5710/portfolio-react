import './style.css'
import { Link } from 'react-router-dom';

const Project = ({title,img,index}) => {
   return (
			<Link to={`/project/${index}`}>
				<li className='project'>
						<img src={img} alt={title} className='project__img' />
						<h3 className='project__title'>{title}</h3>
				</li>
			</Link>
		)
}
 
export default Project;