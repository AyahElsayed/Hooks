import React from 'react'

export const Button = ({ onClick, lable,n }) => {
    return (
        <div>
            <button className="btn-primary btn mt-3"
                onClick={()=>onClick(n)}>
                {lable}
            </button>
        </div>
    )
}
