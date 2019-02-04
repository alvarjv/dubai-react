import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-Transform:capitalize;
font-size:1.4rem;
font-family: 'Teko';
background: transparent;
border:0.05rem solid var(l--lightBlue);
border-color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
color:${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
border-radius:0.5rem;
padding: 0.0rem 0.5rem;
cursor:pointer;
marging:0.3rem 0.3rem 0.2rem 0.0rem;
margin-right: 0.2em;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    color: var(--mainWhite);
}
&:focus{
    outline:none;
}
`