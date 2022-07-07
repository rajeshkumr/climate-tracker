import React from 'react';
import ReactDOM from 'react-dom';

function Header() {

  function reloadClimate() {
    alert("Reload");
  }

    return (
      <header className="flex bg-sky-300">
        <div className="left flex-auto">Menu</div>
        <div className="middle flex-auto">
          <div className="logo font-mono uppercase font-bold">Climate Tracker</div>
        </div>
        <div className="right flex-auto" onClick={reloadClimate}>Refresh</div>
      </header>
      
    );
  }
  
  export default Header;