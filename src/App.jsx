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
    case "MUZEN":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/0e/Muzan_Kibutsuji_Full_Body_%28Anime%29.png",
        name: "Kibutsuji Muzen",
        type: "Demon King (Progenitor)",
        toggleText: state.toggleText
      };
    case "UM1":
      return {
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93f37be2-d346-40d1-ad11-3be570416e52/dewpspa-685640cc-b88f-45cf-b2f7-93a13d523abb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkzZjM3YmUyLWQzNDYtNDBkMS1hZDExLTNiZTU3MDQxNmU1MlwvZGV3cHNwYS02ODU2NDBjYy1iODhmLTQ1Y2YtYjJmNy05M2ExM2Q1MjNhYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ksGkcDpEZW_PI6IdC4TMiUmtDYwm13ZxqmbqXvKODVY",
        name: "Kokushibo",
        type: "Upper Moon One",
        toggleText: state.toggleText
      };
    case "UM2":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/5/58/Doma_colored_body_3.png",
        name: "Doma",
        type: "Upper Moon Two",
        toggleText: state.toggleText
      };
    case "UM3":
      return {
        url: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/5/5c/Akaza_Full_Body_%28Anime%29.png",
        name: "Akaza",
        type: "Upper Moon Three",
        toggleText: state.toggleText
      };
    case "UM4":
      return {
        url: "https://static.wikia.nocookie.net/versus-connections/images/b/bf/Download-demon-slayer-hantengu-karaku-tengu-cursor-custom-cursor-png.png",
        name: "Hantengu",
        type: "Upper Moon Four",
        toggleText: state.toggleText
      };
    case "UM5":
      return {
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60c131ad-0b26-4885-933f-8dc9f257f2dd/dgdhdfh-1fa81d5c-e7eb-4f02-a535-9d0942c49fd9.png/v1/fit/w_698,h_1145/gyokko___demon_slayer____by_1684i64853thfbc_dgdhdfh-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0NSIsInBhdGgiOiJcL2ZcLzYwYzEzMWFkLTBiMjYtNDg4NS05MzNmLThkYzlmMjU3ZjJkZFwvZGdkaGRmaC0xZmE4MWQ1Yy1lN2ViLTRmMDItYTUzNS05ZDA5NDJjNDlmZDkucG5nIiwid2lkdGgiOiI8PTY5OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0QjHrfqFZyJmAnkP6TN9oFtq1VXZmFyzSTFna7QdDCQ",
        name: "Gyokko",
        type: "Upper Moon Five",
        toggleText: state.toggleText
      };
    case "UM6":
      return {
        url: "https://64.media.tumblr.com/695b21b90f44285039737310b15b0641/65f57f62e5a05fd0-85/s1280x1920/0a310820cfb62c2ebcdff4797d88f3df58fb7097.png",
        name: "Daki & Gyutaro",
        type: "Upper Moon Six",
        toggleText: state.toggleText
      };
      
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
        <img src={state.url} alt={state.name} className="graphic"/>
        <h4>{state.name}</h4>
        <h4>{state.type}</h4>
      </div>
        <div>Hashira</div>
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
        <div>Demon King</div>
        <button onClick={()=>{
            dispatch({type:"MUZEN"})
          }}> MJ </button>

        <div>Upper Moons</div>
        <button onClick={()=>{
            dispatch({type:"UM1"})
          }}> One </button>
        <button onClick={()=>{
            dispatch({type:"UM2"})
          }}> Two </button>
        <button onClick={()=>{
            dispatch({type:"UM3"})
          }}> Three </button>
        <button onClick={()=>{
            dispatch({type:"UM4"})
          }}> Four </button>
        <button onClick={()=>{
            dispatch({type:"UM5"})
          }}> Five </button>
        <button onClick={()=>{
            dispatch({type:"UM6"})
          }}> Six </button>
    </div>
  );
}

export default App;