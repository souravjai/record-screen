import { useRef, useState } from "react";
import RecoderScreen from "./RecoderScreen";
import PreviewVideo from "./PreviewVideo";
import MediaVideo from "./MediaVideo";

import download from "../assets/download.svg";
import stop from "../assets/stop.svg";
import restart from "../assets/restart.svg";
import Button from "./Button";

export default function Container({ err, setErr }) {
	const [isRecording, setIsRecording] = useState(false);
	const [recordedChunks, setRecordedChunks] = useState([]);
	const [videoSrc, setVideoSrc] = useState("");
	const videoRef = useRef(null);
	const mediaRecorderRef = useRef(null);

	const startScreenShare = async () => {
		try {
			if (err) return;
			const stream = await navigator.mediaDevices.getDisplayMedia({
				video: true,
				audio: true,
			});

			videoRef.current.srcObject = stream;
			videoRef.current.play();

			const mediaRecorder = new MediaRecorder(stream, {
				mimeType: "video/webm",
			});
			mediaRecorderRef.current = mediaRecorder;

			const chunks = [];
			mediaRecorder.ondataavailable = (event) => {
				if (event.data.size > 0) {
					chunks.push(event.data);
				}
			};

			mediaRecorder.onstop = () => {
				const blob = new Blob(chunks, { type: "video/webm" });
				const videoURL = URL.createObjectURL(blob);
				setVideoSrc(videoURL);
				setRecordedChunks(chunks);

				// Stop all streams
				stream.getTracks().forEach((track) => track.stop());
				setIsRecording(false);
			};

			mediaRecorder.start();
			setIsRecording(true);
			setErr("");
		} catch (error) {
			setErr(error.name + ":" + error.message);
		}
	};

	const stopRecording = () => {
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.stop();
			setIsRecording(false);
		}
	};

	const downloadRecording = () => {
		if (recordedChunks.length > 0) {
			const blob = new Blob(recordedChunks, { type: "video/webm" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "recording.webm";
			a.click();
		}
	};

	const onRestart = () => {
		setIsRecording(false);
		setRecordedChunks([]);
		setVideoSrc("");
		mediaRecorderRef.current = null;
	};

	return (
		<div className='container'>
			<RecoderScreen
				startScreenShare={startScreenShare}
				shouldDisplay={!isRecording && !videoSrc}
			/>
			<PreviewVideo videoRef={videoRef} shouldDisplay={isRecording} />
			<MediaVideo shouldDisplay={!!videoSrc} videoSrc={videoSrc} />

			<div
				className={
					"menu_buttons " + (isRecording || videoSrc ? "show" : "hide")
				}>
				{isRecording && (
					<Button src={stop} onClick={stopRecording}>
						Stop
					</Button>
				)}
				{!isRecording && (
					<Button src={download} onClick={downloadRecording}>
						Download
					</Button>
				)}
				{videoSrc && (
					<Button src={restart} onClick={onRestart}>
						Restart
					</Button>
				)}
			</div>
		</div>
	);
}
