import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="wsawebmaster"
          description="Binha e Paulinho dançando juntos"
          music="Tipo Gin - E ela tá movimentando"
          url="https://aws-br-cdn.kwai.net/upic/2021/08/16/03/BMjAyMTA4MTYwMzU0MTFfMTUwMDAwOTYyNDI0ODIzXzE1MDA2MDE1MzE4Mzg2M18yXzM=_b_Bd0118c26b420e20fbc8ecd4682d00bf6.mp4"
        />
        <Video
          likes={444}
          messages={555}
          shares={666}
          name="Wagner Andrade"
          description="Dev mostrando conteúdos"
          music="U2 - Beautiful Day"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={777}
          messages={888}
          shares={999}
          name="Pedro"
          description="Bird olhando para a camera"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
