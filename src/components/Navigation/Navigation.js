const Navigation = ({ onRouteChange }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
{/*			we use arrow func because this protect from execution the func during rendering the page.*/}
			<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign Out </p>
		</nav>
		);
}

export default Navigation;