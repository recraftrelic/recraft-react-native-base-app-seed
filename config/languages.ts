import { en } from './languages/en';
import { fr } from './languages/fr';
import { sp } from './languages/sp';
import { gr } from './languages/gr';
import { ch } from './languages/ch';

export enum LanguageKey {
  en = "en",
  fr = "fr",
  sp = "sp",
  gr = "gr",
  ch = "ch"
}

export interface AppLanguage {
  firstButton: string,
  secondButton: string
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.sp]: sp,
  [LanguageKey.gr]: gr,
  [LanguageKey.ch]: ch,
}
