const Facerecognition = ({ imageUrl }) => {
	console.log('test', imageUrl)
	return (
			<div className='center ma'>
				<div className='absolute mt2'>
					<img alt='ooops' src={imageUrl} width='500px' height='auto' />
				</div>
			</div> 
		);
}

export default Facerecognition;