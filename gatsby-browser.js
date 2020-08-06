import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

//this wraps the entire root with styled components themeProvider
// element = react app


// this is global css styling resets
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1}
    }
`
//jsx return
export const wrapRootElement = ( { element } ) => (

    <ThemeProvider theme={Theme}>

        <GlobalStyles/>
        {element} 

    </ThemeProvider>

)