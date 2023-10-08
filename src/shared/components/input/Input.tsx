import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import NewText from "../text/NewText";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";

interface InputProps extends TextInputProps {
    title?: string
}

const Input = ({ ...props }: InputProps) => {
    return (
        <DisplayFlexColumn>
            {props.title && (
                <NewText customMargin='0px 0px 4px 8px' color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
                    {props.title}
                </NewText>
            )}
            <ContainerInput {...props} />
        </DisplayFlexColumn>
    )
}

export default Input;