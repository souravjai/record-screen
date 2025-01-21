export default function Recorder({ onClick }) {
	const common = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	};
	const circles = {
		height: "90%",
		width: "90%",
		borderRadius: "50%",
	};

	return (
		<span
			className='recorder hoverable'
			onClick={onClick}
			style={{
				...common,
				height: "70px",
				width: "70px",
				margin: "1rem auto",
				display: "flex",
			}}>
			<span
				className='recorder__outer-circle'
				style={{ ...common, ...circles, border: "2px solid white" }}>
				<span
					className='recorder__inner-circle'
					style={{ ...common, ...circles, background: "red" }}></span>
			</span>
		</span>
	);
}
