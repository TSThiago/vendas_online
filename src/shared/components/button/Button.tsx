import { TouchableOpacityProps } from "react-native/types";
import { ButtonContainer, ButtonSecondary, GradientButton } from "./buttons.style";
import { theme } from "../themes/theme";
import NewText from "../text/NewText";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
    switch (props.type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary margin={props.margin} {...props}>
                    <NewText
                        color={theme.colors.mainTheme.primary}
                        type={textTypes.BUTTON_BOLD}>
                        {title}
                    </NewText>
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={props.margin} {...props}>
                    <GradientButton
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
                    >
                        <NewText
                            color={theme.colors.neutralTheme.white}
                            type={textTypes.BUTTON_BOLD}>
                            {title}
                        </NewText>
                    </GradientButton>
                </ButtonContainer>
            )
    }


};

export default Button;
