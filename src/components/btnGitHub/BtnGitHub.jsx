import './style.css'

const BtnGitHub = ({link}) => {
   return (
			<a href={link} target='blank' className='btn-outline'>
				<img src='./img/icons/gitHub-black.svg' alt='' />
				GitHub repo
			</a>
		)
}
 
export default BtnGitHub;