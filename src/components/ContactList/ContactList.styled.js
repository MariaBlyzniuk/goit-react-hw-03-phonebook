import styled from "styled-components";

export const ContactListStyle = styled.ul`
display: flex;
padding-left: 20px;
flex-direction: column;
`;
export const ContactText = styled.p`
font-size: 20px;
`;

export const ContactButton = styled.button`
display: block;
height: 30px;
padding: 5px;
margin-left: 30px;
border-radius: 4px;
font-size: 15px;
cursor: pointer;
:hover{
    background-color: lightskyblue;
}
`;

export const ContactItem = styled.li`
display: flex;
align-items: baseline;
`;