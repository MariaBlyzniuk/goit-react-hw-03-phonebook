import styled from "styled-components";

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
width: 400px;
border: 1px solid black;
padding: 20px;

`;
export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
width: 300px;
`;
export const Input = styled.input`
padding: 5px;
margin-top: 5px;
border-radius: 4px;
font-size: 15px;
`;

export const Button = styled.button`
padding: 5px;
border-radius: 4px;
width: 300px;
font-size: 15px;
cursor: pointer;
:hover{
    background-color: lightskyblue;
}
`;