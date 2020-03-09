import React from 'react';
import { ViewProps, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import useTheme from '../../config/theme/useTheme';
import { AppTheme } from '../../config/theme/themes';

interface Props extends ViewProps {
  children: React.ReactChild,
  style: StyleProp,
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const themeColorStyle: StyleProp<ViewStyle> = [{backgroundColor: theme.backgroundColor}];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style)

  return <SafeAreaView style={newStyle} {...restProps}>{props.children}</SafeAreaView>
};

export default ThemedView;