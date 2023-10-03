import { TouchableOpacityProps } from "react-native/types";
import { ButtonContainer } from "./buttons.style";
import { theme } from "../themes/theme";
import NewText from "../text/NewText";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <ButtonContainer margin={props.margin} {...props}>
          <NewText color={theme.colors.neutralTheme.white} type={textTypes.BUTTON_BOLD}>{title}</NewText>
        </ButtonContainer>
    )
};

export default Button;
