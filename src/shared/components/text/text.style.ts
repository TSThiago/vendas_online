import styled from "styled-components/native";

interface ContainerNewTextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-SemiBold' | 'Poppins-Light' | 'Poppins-Regular';
    customMargin?: string;
}

export const ContainerNewText = styled.Text<ContainerNewTextProps>`
    color: ${(props) => (props.color ? `${props.color}` : 'black')};
    ${(props) => (props.customMargin ? `margin: ${props.customMargin}` : '')};
    padding-top: 3px;
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily}
`