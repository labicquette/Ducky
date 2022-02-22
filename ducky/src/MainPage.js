import React from 'react'

function MainPage(connection){
    const [connected, setConnection] = React.useState(false)
    
    function Connection(){
        //setConnection(!connected)
        return connection.connect
    }


    return <div className="MainPage">
        <button type = "button" onClick={Connection()}>
            {connected ? Connected() : Connection()}
        </button>
        </div>
}

function Connected(){
    return <p>page de tweet</p>
}

export default MainPage;