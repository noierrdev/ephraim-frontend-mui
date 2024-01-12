import React from 'react'
const Loadable=(MyComponent)=>props=>{
    return (
        <React.Suspense fallback={<></>} >
            <MyComponent {...props} />
        </React.Suspense>
    )
}
export default Loadable;