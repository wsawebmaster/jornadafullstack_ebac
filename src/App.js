import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}

        {/* < Video
          likes={111}
          messages={222}
          shares={333}
          name="wsawebmaster"
          description="Binha e Paulinho dançando juntos"
          music="Tipo Gin - E ela tá movimentando"
          url="https://aws-br-cdn.kwai.net/upic/2021/08/16/03/BMjAyMTA4MTYwMzU0MTFfMTUwMDAwOTYyNDI0ODIzXzE1MDA2MDE1MzE4Mzg2M18yXzM=_b_Bd0118c26b420e20fbc8ecd4682d00bf6.mp4"
        /> */}
        {/* < Video
          likes={444}
          messages={555}
          shares={666}
          name="Wagner Andrade"
          description="Dev mostrando conteúdos"
          music="U2 - Beautiful Day"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        /> */}
        {/* < Video
          likes={777}
          messages={888}
          shares={999}
          name="Pedro"
          description="Bird olhando para a camera"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
