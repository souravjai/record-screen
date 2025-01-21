export default function PreviewVideo({ shouldDisplay, videoRef }) {
	return (
		<video
			ref={videoRef}
			className={"preview-video " + (shouldDisplay ? "show" : "hide")}
			style={{ maxWidth: "100%" }}
			controls
			autoPlay
		/>
	);
}
