import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import Button from '../../components/Base/ButtonItem';
import ThemeToggle from '../../components/Base/ThemeToggle';
import LanguageSelector from '../../components/Base/languageSelector';
import { connect } from "react-redux";
import { setThemeAction, setLanguageAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { ThemeKey } from '../../config/themes';
import { AppLanguage, LanguageKey } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {

  const goToBaseNext = () => {
    history.push('/base')
  }

  const language: AppLanguage = useLanguage();

  const updateTheme = (theme: ThemeKey) => dispatch(setThemeAction(theme))
  const updateLanguage = (language: LanguageKey) => dispatch(setLanguageAction(language))

  return (
    <>
      <ThemeToggle updateTheme={updateTheme} />
      <LanguageSelector updateLanguage={updateLanguage} />
      <Button
        label={language.firstButton}
        onButtonPress={goToBaseNext}
      />
    </>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(BaseHome);
