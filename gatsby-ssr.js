import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from ".src/themes/theme"

//this wraps the entire root with styled components themeProvider
// element = react app

export const wrapRootElement = ( { element } ) => (

    <ThemeProvider theme={Theme}> {element} </ThemeProvider>

)