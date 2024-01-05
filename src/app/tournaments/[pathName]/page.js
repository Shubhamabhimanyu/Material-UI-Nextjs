
import React from 'react'
import Dr from '@/components/DynamicRoute/Dr';
export default async function page({ params }) {
    return (
        <>
            <Dr pathname={params.pathName} r_name="tournaments" c_name="tournaments" />
        </>
    )
}
