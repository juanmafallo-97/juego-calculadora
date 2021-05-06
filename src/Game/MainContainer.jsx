import React, { useState } from "react";
import OnGame from "./OnGame";

export default function MainContainer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      {playing ? (
        <div>
          <OnGame />
          <button onClick={() => setPlaying(false)}>Volver</button>
        </div>
      ) : (
        <button onClick={() => setPlaying(true)}>Jugar!</button>
      )}
    </div>
  );
}
