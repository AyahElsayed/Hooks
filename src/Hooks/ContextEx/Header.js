import React from 'react'
import User from './User'

function Header(props) {
    return (
        <div>
            {/* <User username={props.username} /> */} {/* => befor using Context */}
            <User/>
        </div>
    )
}

export default Header
