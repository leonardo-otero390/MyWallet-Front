import styled from "styled-components"

const StyledForm = styled.form`
display:grid;
width: 90%;
max-width:326px;
row-gap:13px;

`

const StyledInput = styled.input`
height: 58px;
background: #FFFFFF;
border-radius: 5px;
border:none;
padding-left: 15px;
font-family: 'Raleway',cursive;
font-size: 20px;
color: #000000;

:focus {
    outline-color: #A328D6;
}
`

const StyledButton = styled.button`
height: 46px;
background: #A328D6;
border-radius: 5px;
border:none;
font-family: 'Raleway',cursive;
font-weight:bold;
font-size: 20px;
color:#fff;
`
const StyledContainer = styled.main`
width: 85%;
max-width:326px;
height:100vh;
margin: 0 auto;
    header{
        margin: 25px 0 40px;
     display:flex;
     justify-content:space-between;
     align-items:center;
     font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-size: 26px;
    color: #FFFFFF;
    }
`
export {
    StyledButton,
    StyledForm,
    StyledInput,
    StyledContainer
}