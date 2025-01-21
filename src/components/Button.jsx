export default function Button({ src, onClick, children }) {
	return (
		<div className='img-button'>
			<img className='hoverable' src={src} onClick={onClick} alt={children} />
			<span className='muted'>{children}</span>
		</div>
	);
}
