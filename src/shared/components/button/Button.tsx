import { TouchableOpacityProps } from "react-native/types";
import { ButtonContainer, ButtonSecondary, GradientButton, ActivityIndicator, ButtonDisabled } from "./buttons.style";
import { theme } from "../themes/theme";
import NewText from "../text/NewText";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
}

const Button = ({ title, loading, disabled, onPress, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if(!loading && !disabled && onPress) {
            onPress();
        }
    }


    const renderText = (color: string) => {
        return (
            <>
                <NewText color={color} type={textTypes.BUTTON_BOLD}>
                    {title}
                </NewText >
                {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
            </>
        );
    };

    if (disabled) {
        return (
            <ButtonDisabled margin={props.margin} {...props}>
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        )
    };

    switch (props.type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary margin={props.margin} onPress={handleOnPress} {...props}>
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={props.margin} onPress={handleOnPress} {...props}>
                    <GradientButton
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
                    >
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
            )
    }


};

export default Button;
