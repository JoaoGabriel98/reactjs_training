import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max} = props
    const result =  Math.floor(Math.random() * (max - min) ) + min

    return (
        <div>
            <p>The random number is: { result }</p>
        </div>
    )
}