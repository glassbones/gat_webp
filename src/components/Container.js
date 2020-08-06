import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav } from "../components"

// https://www.youtube.com/watch?v=44TRjWt47PE

export const Container = ( {children} ) => (

    <ContainerWrapper> 

        <Nav/>
        {children}

    </ContainerWrapper>

)