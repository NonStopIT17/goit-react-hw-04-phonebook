import styled from "styled-components";

export const FilterForm = styled.form`
input{
padding: 5px;
border-radius: 5px;
margin-bottom: 20px;
width: 200px;
}
`

export const ContactItem = styled.li`
:not(:last-child){
    margin-bottom: 15px;
}
`
export const DeleteButton = styled.button`
padding: 0 5px; 
border-radius: 5px;
cursor: pointer;
border:none;
:hover{
        border: 1px dashed red;
        cursor: pointer;
    }
`