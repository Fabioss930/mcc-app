import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


body {
  margin: 0;
  display: flex;
  font-family: "Poppins", sans-serif;
}

h1 {
  font-size: 5.2em;
  line-height: 1.1;
}

a {
  text-decoration: inherit;
}

button {
 
  cursor: pointer;
  
}
`;
