import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import NewText from "../../../shared/components/text/NewText";
import { textTypes } from "../../../shared/components/text/textTypes";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <NewText type={textTypes.TITLE_BOLD}>Login</NewText>
                <Input />
                <Button margin="10px" onPress={handleOnPress} title="ENTRAR"/>
            </ContainerLogin>

        </View>
    )
}

export default Login;