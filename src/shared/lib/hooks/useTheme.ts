import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';

export interface useThemeReturned {
    theme: Theme;
    themeToggle: (theme: Theme) => void;
}

export const useTheme = (): useThemeReturned => {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeToggle = (newTheme: Theme) => {
        if (newTheme === Theme.SYSTEM) {
            newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? Theme.DARK
                : Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.SYSTEM,
        themeToggle,
    };
};
