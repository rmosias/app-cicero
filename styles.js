import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Root = styled(WebView).attrs(() => ({
  containerStyle: {
    backgroundColor: '#2980B9',
  },
}))`
  flex: 1;
`;

export const StatusBar = styled.StatusBar.attrs(() => ({
  barStyle: 'light-content',
}))``;

export const Header = styled.View`
  height: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + 10
    : getStatusBarHeight()}px;
  background-color: #2980b9;
`;

export const Footer = styled.View`
  height: ${getBottomSpace()}px;
  background-color: #fff;
`;
