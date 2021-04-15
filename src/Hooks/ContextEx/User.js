import React,{useContext} from 'react'
import { ThemeContext, UserContext } from './Page'

function User(props) {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return (
        <div>
            {/* {props.username} */} {/* => befor using Context */}
            {/* ============ using context ==================/}
            {/* <UserContext.Consumer>
                {(user) => (
                    <ThemeContext.Consumer>
                        {(theme) => (
                            <div>
                                {user.name}|  {theme.name}
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </UserContext.Consumer> */}

            {/* =================== using useContext ==============  */}
            {user.name}|  {theme.name}
        </div>
    )
}

export default User
