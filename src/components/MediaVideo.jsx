export default function MediaVideo({ videoSrc, shouldDisplay }) {
	return (
		<video
			className={"preview-video " + (shouldDisplay ? "show" : "hide")}
			src={videoSrc}
			controls
		/>
	);
}
