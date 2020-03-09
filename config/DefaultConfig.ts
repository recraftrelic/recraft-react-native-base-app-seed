import { ThemeKey } from "./theme/themes";

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
