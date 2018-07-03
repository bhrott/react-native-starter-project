import EStyleSheet from 'react-native-extended-stylesheet'
import ColorPalette from './ColorPalette'

export default () => {
    EStyleSheet.build({
        $colorPrimary: ColorPalette.primary,
        $colorPageBackground: ColorPalette.pageBackground,
        $colorDarkAccent: ColorPalette.darkAccent,
        $paddingSpace: 20
    })
}
