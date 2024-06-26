import { theme, ThemeConfig } from 'antd';


const COLOR_PRIMARY = '#7342f3';
const COLOR_DEFAULT_LINK = '#ffffff';
const COLOR_PRIMARY_LINK = '#8a70ff';
const COLOR_DANGER = '#e66365';
const COLOR_TEXT_PLACEHOLDER = '#ffffff70';

export const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: COLOR_PRIMARY,
    colorPrimaryHover: COLOR_PRIMARY,
    colorBgContainerDisabled: COLOR_PRIMARY,
    colorLink: COLOR_DEFAULT_LINK,
    colorLinkHover: COLOR_PRIMARY_LINK,
    colorLinkActive: COLOR_PRIMARY_LINK,
    colorTextPlaceholder: COLOR_TEXT_PLACEHOLDER,
    colorTextDisabled: COLOR_TEXT_PLACEHOLDER,
    colorError: COLOR_DANGER,
    colorErrorHover: COLOR_DANGER,
    colorErrorActive: COLOR_DANGER,
    purple: '#653bd2',
    cyan: '#00dcc7',
  },
  components: {
    Badge: {
      textFontSize: 14,
    },
  }
};
