import styled from "styled-components/native";

interface ContainerNewTextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerNewText = styled.Text<ContainerNewTextProps>`
    color: ${(props) => (props.color ? `${props.color}` : 'black')};
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily}
`