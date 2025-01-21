import Recorder from "./Recorder";

export default function RecoderScreen({ shouldDisplay, startScreenShare }) {
	const handleStartRecord = () => {
		startScreenShare();
	};

	return (
		<div className={"recoder-screen " + (shouldDisplay ? "show" : "hide")}>
			<Recorder onClick={handleStartRecord} />
			<span style={{ fontSize: "x-small" }} className='muted'>
				Start Recording
			</span>
		</div>
	);
}
