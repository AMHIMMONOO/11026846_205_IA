import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";


function MainLayout({Children}) {
  return ( 
    <div>
      <Header/>
      <div>{Children}</div>
    </div>
   )
}
 
export default MainLayout;