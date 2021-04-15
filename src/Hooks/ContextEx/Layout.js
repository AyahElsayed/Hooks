import React from 'react'
import Header from './Header'

function Layout(props) {
    return (
        <div>
            {/* <Header username={props.username} />  */} {/* => befor using Context */}
            <Header />
        </div>
    )
}

export default Layout
