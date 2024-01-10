const Contacts = () => {
   return (
			<main className='section'>
				<div className='container'>
					<h1 className='title-1'>Contacts</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Vladikavkaz, Russia</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Telegram / WhatsApp</h2>
							<p>
								<a href='tel:+79051234567'>+7 (963) 378-76-30</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:164873@mail.ru'>164873@mail.ru</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		)
}
 
export default Contacts;