import React from 'react'

function Card(props){
    const [affichage, setAffichage] = React.useState(false);

    function changeAffichage(){
        setAffichage(!affichage)
    }

    return <div className='Card'>
                <button type="button" onClick={changeAffichage}>
                    {affichage ? props.symbol : '-'}
                </button>
            </div>
        

}

export default Card;