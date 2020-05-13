import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import Button from '../../components/Base/ButtonItem';
import { AppLanguage, LanguageKey } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

const BaseNext: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToBaseHome = () => {
        history.push('/')
    }  
    const language: AppLanguage = useLanguage();

    return (
        <Button
          label={language.secondButton}
          onButtonPress={goToBaseHome}
        />
    );
}

export default BaseNext;
