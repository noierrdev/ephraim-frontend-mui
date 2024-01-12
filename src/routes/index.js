import { Typography } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "./Loadable";

const AppRoutes=props=>{
    const routes=[
        {
            path:"/",
            element:Loadable(React.lazy(()=>import('../layouts/Default')))(props),
            children:[
                {
                    path:"",
                    element:Loadable(React.lazy(()=>import('../pages/index')))(props),
                }
            ]
        }
    ]
    return useRoutes(routes)
}
export default AppRoutes;