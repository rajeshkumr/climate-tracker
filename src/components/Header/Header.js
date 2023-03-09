import { useState } from "react";
import { useDispatch } from "react-redux";
import * as weatherAction from "../../actions/weather";

function Header() {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);

  const updateWeather = () => {
    dispatch({
      type: weatherAction.GET_WEATHER
    })
  }

  const toggleMenu = () => {
    setActive(!isActive);
  }

  return (
    <header className="flex bg-sky-300">
      <div className="left flex-auto">
        <span className="material-symbols-outlined align-middle cursor-pointer" onClick={toggleMenu}>Menu</span>
        <ul className={isActive ? "main-menu show" : "main-menu"}>
          <a href="#"><li><span className="material-symbols-outlined">settings</span>Settings</li></a>
          <a href="#"><li><span className="material-symbols-outlined">info</span>About</li></a>
          <a href="#"><li><span className="material-symbols-outlined">help</span>Help</li></a>
        </ul>
      </div>
      <div className="middle flex-auto">
        <div className="logo font-mono uppercase font-bold align-[1px]">Weather Route</div>
      </div>
      <div className="right flex-auto" onClick={updateWeather}><span className="material-symbols-outlined align-middle cursor-pointer">refresh</span></div>
    </header>

  );
}

export default Header;