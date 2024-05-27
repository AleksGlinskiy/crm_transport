import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/Button';
import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';

export default function SettingsPage() {
    const { theme, themeToggle } = useTheme();

    const click = () => {
        themeToggle(Theme.LIGHT);
    };

    const click2 = () => {
        themeToggle(Theme.DARK);
    };

    const click3 = () => {
        themeToggle(Theme.SYSTEM);
    };

    
    return (
        <>
            <Text tag={TextTag.H1} style={TextStyle.H2}>
                Настройки
            </Text>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    marginTop: '40px',
                }}
            >
                
                <Button onClick={click}>LIGHT</Button>
                <Button onClick={click2}>DARK</Button>
                <Button onClick={click3}>SYSTEM</Button>
            </div>
        </>
    );
}
