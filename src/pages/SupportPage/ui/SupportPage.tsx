import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';

export default function SupportPage() {
    return (
        <>
            <Text tag={TextTag.H1} style={TextStyle.H2}>
                Поддержка
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
