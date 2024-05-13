import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? Theme.DARK
    : Theme.SYSTEM;

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
    prefersColorScheme;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children?: ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
    const { children, initialTheme } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
