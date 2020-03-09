import { handleActions, createAction } from 'redux-actions';
import { ApplicationConfig, defaultConfig } from '../../config/DefaultConfig';
import { Reducer, ReducerState } from 'react';
import { ThemeAction } from '../../config/theme/themes';

type ConfigReducerType = Reducer<ApplicationConfig, ThemeAction>

const initState: ReducerState<ConfigReducerType> = defaultConfig;

const configReducer: ConfigReducerType = handleActions(
    {
        SET_THEME: (state, action) => {
            return {
                ...state,
                constants: {
                    ...state.constants,
                    selectedTheme: action.payload
                }
            };
        },
    },
    initState
);

export const setThemeAction = createAction("SET_THEME");

export default configReducer;
