import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import Theme from './Theme'

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    //Fonts
    @font-face {
        font-family: 'Prompt';
        font-weight: black;
        src: url('/fonts/Prompt-Black.ttf') format("truetype");
    }
    @font-face {
        font-family: 'Prompt';
        font-weight: bold;
        src: url('/fonts/Prompt-Bold.ttf') format("truetype");
    }
    @font-face {
        font-family: 'Prompt';
        src: url('/fonts/Prompt-Regular.ttf') format("truetype");
    }


    @font-face {
        font-family: 'Raleway';
        src: url('/fonts/Raleway-VariableFont_wght.ttf') format("truetype");
    }

   html {
        font-size: 16px;
        box-sizing: border-box;
    }
    * , *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${Theme.colors.primary};
        color: ${Theme.colors.secondary};
        font-family:  'Raleway';
        
    }
`

export default GlobalStyle
