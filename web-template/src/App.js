import "./App.css";
import InputFiled from "./components/InputFiled";
import ShortCuts from "./components/ShortCuts";
import ThemeChange from "./components/ThemeChange";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import News from "./components/News";
function App() {
  return (
    <div className="">
      {/* <h1>Hi, UserName</h1> */}
      <div className="App">
        <div className="app-shortcut">
          <ShortCuts />
        </div>

        <div className="app-inputfield">
          <InputFiled />
        </div>
        <div className="themeChange">
          <ThemeChange />
        </div>
      </div>
      {/* <LoginPage /> */}
      {/* <SignUp /> */}
      <News />
    </div>
  );
}

export default App;
