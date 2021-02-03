import { AppState } from '../core/core.module';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'ne' | 'bh' | 'hi';

export interface SettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  hour: number;
}

export interface State extends AppState {
  settings: SettingsState;
}
