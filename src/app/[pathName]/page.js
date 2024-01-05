
import React from 'react'
export default async function page({ params }) {
    return (
        <>
            <div> this is {params.pathName}</div>
        </>
    )
}
