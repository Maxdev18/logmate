import video from "./assets/globe.mp4"
import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />

      {/* Dark glass overlay */}
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">Welcome to DarkBox</h1>
      </div>
    </div>
  )
}

export default App
