import { ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

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
    selectedLanguage: LanguageKey,
    title: string,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      title: "Base App",
    }
}
