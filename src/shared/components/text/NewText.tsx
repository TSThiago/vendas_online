import { TextProps } from "react-native/types";
import { ContainerNewText } from "./text.style";
import { useCallback, useEffect, useMemo } from "react"
import { textTypes } from "./textTypes";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

interface NewTextProps extends TextProps {
    color?: string;
    type?: string;
    customMargin?: string;
}

const fontMap = {
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Italic': require('../../../assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf')
};

const NewText = ({ ...props }: NewTextProps) => {
    const [fontsLoaded, fontError] = useFonts(fontMap);

    useEffect(() => {
        const onLayoutRootView = async () => {
            if (fontsLoaded || fontError) {
                await SplashScreen.hideAsync();
            }
        };

        onLayoutRootView();
    }, [fontsLoaded, fontError]);

    // if (!fontsLoaded && !fontError) {
    //     return null;
    // }

    const fontSize = useMemo(() => {
        switch (props.type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_SEMIBOLD:
            case textTypes.TITLE_LIGHT:
            case textTypes.TITLE_REGULAR:
                return '24px';
            case textTypes.SUBTITLE_BOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.SUBTITLE_REGULAR:
                return '20px';
            case textTypes.BUTTON_BOLD:
            case textTypes.BUTTON_SEMIBOLD:
            case textTypes.BUTTON_LIGHT:
            case textTypes.BUTTON_REGULAR:
                return '18px'
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
                return '10px'
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
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
            case textTypes.TITLE_SEMIBOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.BUTTON_SEMIBOLD:
            case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
                return 'Poppins-SemiBold';
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

    return <ContainerNewText customMargin={props.customMargin} color={props.color} fontSize={fontSize} fontFamily={fontFamily} {...props} />
};

export default NewText;