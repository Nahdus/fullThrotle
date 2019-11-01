import React, {useState} from 'react'
import Sidenav from 'sidenavjs'


function Sidenavigation(){
    const [openclose,toggle]= useState({sidebarOpen:false})
    const  open=(open)=>{
        toggle({sidebarOpen:open})
    }
    return (
        <Sidenav
        open={openclose}
        onSetOpen={open}
        sidenav={
          <div>sidenav contents</div>
        }
      >
        <div>
          <button onClick={() => { open(true) }}>
            Click here to open the sidenav
          </button>
        </div>
      </Sidenav>
    )

}

export default Sidenavigation