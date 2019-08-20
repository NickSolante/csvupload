import React, {useEffect, Fragment} from 'react'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

import NavBar from './components/layout/navBar'


const App = () => {

    useEffect(() => {
      M.AutoInit();
    });

     return (
     <Fragment>
      <NavBar />
    </Fragment>
    );
       
}

export default App

