import { theme, ThemeConfig } from 'antd';


export const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {},
  components: {
    Badge: {
      textFontSize: 14
    },
    Button: {
      fontSize: 14,
      fontSizeSM: 13,
      fontSizeLG: 14,
      fontSizeXL: 16
    },
    Form: {
      itemMarginBottom: 20,
      controlItemBgHover: 'transparent',
      verticalLabelPadding: '0 0 6px 4px'
    }
  }
};
