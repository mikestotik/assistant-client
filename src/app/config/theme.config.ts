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
      fontSizeXL: 16,
      colorLink: '#3d87ef',
      colorLinkHover: '#64a1fa',
      colorLinkActive: '#3d87ef',
      colorBgContainer: '#212125',
    },
    Form: {
      itemMarginBottom: 20,
      verticalLabelPadding: '0 0 6px 4px',
    },
    Input: {
      colorBgContainer: '#212125',
    },
  }
};
