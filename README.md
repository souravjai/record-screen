Hosted @ https://record-screen-seven.vercel.app/

# Screen Sharing and Recording React App

This is a React application that allows users to start screen sharing and record the shared screen. Once the screen sharing is stopped, the recorded video can be previewed and downloaded.

> This takes help of browser's screensharing feature to record screen.


## Features

- Start screen sharing using the browser's `getDisplayMedia` API.
- Record the shared screen using the `MediaRecorder` API.
- Stop screen sharing using a button or the built-in stop functionality.
- Preview the recorded video.
- Download the recorded video as a file.

---

## Demo

### Desktop Support

This application is designed for desktop browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

> **Note**: Screen sharing is not supported on mobile browsers due to platform limitations.

---

## Limitations

- **Browser Support**: Works only in browsers that support the `navigator.mediaDevices.getDisplayMedia` API.
- **Mobile Support**: Screen sharing does not work on most mobile browsers due to API restrictions.

---

## Technologies Used

- **React.js**: Frontend framework
- **MediaRecorder API**: For recording screen media
- **getDisplayMedia API**: For screen sharing

---

## Future Enhancements

- Add cross-browser compatibility checks for better UX.
- Extend functionality to mobile devices using native apps (e.g., MediaProjection for Android or ReplayKit for iOS).


