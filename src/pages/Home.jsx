import Header from "../components/header/Header";


const Home = () => {
   return (
			<>
				<Header />

				<main className='section'>
					<div className='container'>
						<div className='content-list'>
							<div className='content-list__item'>
								<h2 className='title-2'>Frontend</h2>
								<p>
									JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, SCSS, NPM,
									TailwindCSS
								</p>
							</div>
						</div>
					</div>
				</main>
			</>
		)
}
 
export default Home;