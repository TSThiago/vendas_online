import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import NewText from "../../../shared/components/text/NewText";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/components/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <NewText type={textTypes.TITLE_BOLD}>Login</NewText>
                <Input />
                <Button  loading type={theme.buttons.buttonsTheme.primary} margin="16px" onPress={handleOnPress} title="ENTRAR"/>
            </ContainerLogin>

        </View>
    )
}

export default Login;