import { ThemeKey } from "./themes";

export interface AppTheme {
    backgroundColor: string,
    highlightColor: string,
    highlightTextColor: string,
    textColor: string,
    lightTextColor: string,
    lightBottomColor: string,
    alternateMessageBackgroundColor: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    title: string,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      title: "Base App",
    }
}
