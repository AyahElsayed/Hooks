import React from 'react'

export const Button = ({ Counterfn, lable,n }) => {
    return (
        <div>
            <button className="btn-primary btn mt-3"
                onClick={()=>Counterfn(n)}>
                {lable}
            </button>
        </div>
    )
}
