import { TouchableOpacityProps } from "react-native/types";
import { ButtonContainer } from "./buttons.style";
import { Text } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <ButtonContainer margin={props.margin} {...props}>
            <Text>{title}</Text>
        </ButtonContainer>
    )
};

export default Button;
