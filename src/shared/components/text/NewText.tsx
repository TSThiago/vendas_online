import { TextProps } from "react-native/types";
import { ContainerNewText } from "./text.style";
import { useCallback, useMemo } from "react"
import { textTypes } from "./textTypes";
import { isLoaded, useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

interface NewTextProps extends TextProps {
    color?: string;
    type?: string;
}

const NewText = ({ ...props }: NewTextProps) => {
    const [isLoaded] = useFonts({
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../../../assets/fonts/Poppins-Italic.ttf'),
        'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf')
    });

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    const fontSize = useMemo(() => {
        switch (props.type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_LIGHT:
            case textTypes.TITLE_REGULAR:
                return '24px';
            case textTypes.SUBTITLE_BOLD:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.SUBTITLE_REGULAR:
                return '20px';
            case textTypes.BUTTON_BOLD:
            case textTypes.BUTTON_LIGHT:
            case textTypes.BUTTON_REGULAR:
                return '18px'
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
                return '10px'
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.PARAGRAPH_REGULAR:
            default:
                return '14px';
        }
    }, [props.type])

    const fontFamily = useMemo(() => {
        switch (props.type) {
            case textTypes.TITLE_BOLD:
            case textTypes.SUBTITLE_BOLD:
            case textTypes.BUTTON_BOLD:
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_BOLD:
                return 'Poppins-Bold';
            case textTypes.TITLE_LIGHT:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.BUTTON_LIGHT:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
            case textTypes.PARAGRAPH_LIGHT:
                return 'Poppins-Light'
            case textTypes.TITLE_REGULAR:
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.BUTTON_REGULAR:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
            case textTypes.PARAGRAPH_REGULAR:
            default:
                return 'Poppins-Regular';
        }
    }, [props.type]);

    return <ContainerNewText color={props.color} fontSize={fontSize} fontFamily={fontFamily} {...props} onLayout={handleOnLayout} />
};

export default NewText;