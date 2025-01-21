import Home from "./components/Home";
import Container from "./components/Container";
import { useEffect, useState } from "react";

function App() {
	const [err, setErr] = useState("");

	useEffect(() => {
		const isSupported =
			navigator.mediaDevices &&
			typeof navigator.mediaDevices.getDisplayMedia === "function";

		if (!isSupported) {
			setErr("Your device is not supported");
		}
	}, []);

	return (
		<>
			<Home />
			{err && <div style={{ color: "red", margin: "1rem" }}>{err}</div>}
			<Container err={err} setErr={setErr} />
		</>
	);
}

export default App;
