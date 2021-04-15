import React from 'react'
import Layout from './Layout'

export const UserContext = React.createContext()
export const ThemeContext = React.createContext()

const user = { name: 'Ayah' }
const theme = { name: 'Black-theme' } // for the another context

function Page() {
    return (
        <div>
            {/* <Layout username={user.name} /> any items i want to share */}
            <UserContext.Provider value={user}>
                <ThemeContext.Provider value={theme} >
                    <Layout />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Page
