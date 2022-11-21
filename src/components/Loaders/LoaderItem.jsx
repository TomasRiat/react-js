import React from 'react'
import { DotSpinner } from '@uiball/loaders'
import "../../App.css"

function LoaderItem() {

    return (
        <div className='spinnerContainer'>
            <DotSpinner size={200} speed={0.9} color="#1B2727" />
        </div>
    );

}

export default LoaderItem