import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-4 flex">
      <Link to="/">
        {" "}
        <h1 className="m-3 text-white text-3xl font-semibold">News App</h1>
      </Link>
     
      <hr />
    </div>
  );
}

export default Navbar