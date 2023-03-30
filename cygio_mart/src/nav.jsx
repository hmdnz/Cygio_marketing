import React from "react"
export default function Nav(){
  return (
    <div>
         <nav className="navbar">
      <a href="/" className="navbar-brand">My Pink Navbar</a>
      <ul className="navbar-links">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </nav>
    </div>
  );
}