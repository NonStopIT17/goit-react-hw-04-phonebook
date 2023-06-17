import styled from "styled-components";

export const ContactForm = styled.form`
padding: 20px;
display: flex;
flex-direction: column;
width: 300px;
height: 200px;
border: 1px solid green;
margin-bottom: 20px;

label{
display: flex;
flex-direction: column;
width: 150px;
}

label:not(:last-child){
    margin-bottom: 10px;
}

span{
    margin-bottom:10px;
}
input{
padding: 5px;
border-radius: 5px;
}

button{
    padding:5px;
    width: 100px;
    border-radius: 5px;
    border: none;
    :hover{
        border: 1px dashed green;
        cursor: pointer;
    }
}
`