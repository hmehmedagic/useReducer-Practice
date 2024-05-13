import "./App.css";
import React, { useReducer } from "react";
// ------------------------------------------------{Step1: Import Hook}
const reducer = (state, action) => {
  // {Think of this as a playbook of all actions based on scenario}
  switch (action.type) {
    case "WATER":
      return { 
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/4/43/Giyu_anime_design.png",
        name: "Giyu Tomioka",
        type: "Water",
        toggleText: state.toggleText
      };
    // Think of this as Each Play to be executed
    case "LOVE":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/7/74/Mitsuri_anime.png",
        name: "Mitsuri Kanroji",
        type: "Love",
        toggleText: state.toggleText
      };
    case "SERPENT":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/5/57/Obanai_Iguro_Full_Body_%28Anime%29.png",
        name: "Obanai Iguro",
        type: "Serpent",
        toggleText: state.toggleText
      };
    case "WIND":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/3/3f/Sanemi_Shinazugawa_Full_Body_%28Anime%29.png",
        name: "Sanemi Shinazugawa",
        type: "Wind",
        toggleText: state.toggleText
      };
    case "STONE":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/85/Gyomei_anime.png",
        name: "Gyomei Himejima",
        type: "Stone",
        toggleText: state.toggleText
      };
    case "MIST":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/4/4c/Muichiro_Tokito_Full_Body_%28Anime%29.png",
        name: "Muichiro Tokito",
        type: "Mist",
        toggleText: state.toggleText
      };
    case "INSECT":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/e/e5/Shinobu_anime.png",
        name: "Shinobu Kocho",
        type: "Insect",
        toggleText: state.toggleText
      };
    case "FLAME":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/f/fd/Kyojuro_anime.png",
        name: "Kyojuro Rengoku",
        type: "Flame",
        toggleText: state.toggleText
      };
    case "SOUND":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/07/Tengen_anime.png",
        name: "Tengen Uzui",
        type: "Sound",
        toggleText: state.toggleText
      };
      
    // case "toggleText":
    //   return { 
    //     url: state.url,
    //     toggleText: !state.toggleText 
    //   }
    default:
      return state;
  }
};
// Define reducer which allows you to make a switch statement for each case of how your state can be changed

function App() {
  // const [whateverState, setWhateverState] = useState()
  const [state, dispatch] = useReducer(reducer,
    {
      url: '',
      name: '',
      type: ''
      // toggleText: false,
    });
// ------------------------------------------{Step 2: Create state Variable, Create DISPATCH* ---> reducer which contains our current State}

  return (
    <div className="App">
      <div className="hashira">
        <img src={state.url} alt={state.name} />
        <h4>{state.name}</h4>
        <h4>{state.type}</h4>
      </div>
        <div>Current Hashira</div>
        <div>
          <button onClick={()=>{
            dispatch({type:"WATER"})
          }}> Water </button>
          <button onClick={()=>{
            dispatch({type:"LOVE"})
          }}> Love </button>
          <button onClick={()=>{
            dispatch({type:"SERPENT"})
          }}> Serpent </button>
          <button onClick={()=>{
            dispatch({type:"WIND"})
          }}> Wind </button>
          <button onClick={()=>{
            dispatch({type:"STONE"})
          }}> Stone </button>
          <button onClick={()=>{
            dispatch({type:"MIST"})
          }}> Mist </button>
          <button onClick={()=>{
            dispatch({type:"INSECT"})
          }}> Insect </button>
          <button onClick={()=>{
            dispatch({type:"FLAME"})
          }}> Flame </button>
          <button onClick={()=>{
            dispatch({type:"SOUND"})
          }}> Sound </button>
        </div>
        <hr />
        {/* <button onClick={()=>{
          dispatch({type: "toggleText"})
        }}></button> */}
        {/* <div>{state.toggleText && <p> This Text is Visible</p>}</div> */}
    </div>
  );
}

export default App;