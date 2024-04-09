import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import useTitle from '@/shared/hooks/useTitle';

export default function DashboardPage() {
    useTitle('Панель');

    return (
        <>
            <Text tag={TextTag.H1} style={TextStyle.H2}>
                Панель
            </Text>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    marginTop: '40px',
                }}
            >
                <div
                    style={{
                        width: '49%',
                        background: '#fff',
                        height: '300px',
                        borderRadius: '30px',
                    }}
                />
                <div
                    style={{
                        width: '49%',
                        background: '#fff',
                        height: '300px',
                        borderRadius: '30px',
                    }}
                />
                <div
                    style={{
                        width: '100%',
                        background: '#fff',
                        height: '300px',
                        borderRadius: '30px',
                    }}
                />
            </div>
        </>
    );
}
