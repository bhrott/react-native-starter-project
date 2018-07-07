import EStyleSheet from 'react-native-extended-stylesheet'
import colorPalette from './color-palette'

export default () => {
    EStyleSheet.build({
        $colorPrimary: colorPalette.primary,
        $colorPageBackground: colorPalette.pageBackground,
        $colorDarkAccent: colorPalette.darkAccent,
        $paddingSpace: 20
    })
}
