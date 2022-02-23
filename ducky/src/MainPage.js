import React from 'react'

function MainPage(connection){
    const [connected, setConnection] = React.useState(true)
    
    function Connection(){
        setConnection(!connected)
    }

    function Connected(){
        return <p>page de tweet</p>
    }

    return <div className="MainPage">
        <button onClick={Connection}>{connected ? Connected() : Connection()}
        </button>
        </div>
}



export default MainPage;