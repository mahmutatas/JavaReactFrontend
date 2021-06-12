import React from 'react'
import { useParams } from 'react-router'

export default function Detail() {
    let {name} = useParams()
    return (
        <div>
            Pozisyon : {name}
        </div>
    )
}
