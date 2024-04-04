import { Text, TextStyle, TextTag } from '@/shared/ui/Text/Text';
import useTitle from '@/shared/hooks/useTitle';
import useReducerManager from '@/shared/hooks/useReducerManager';
import { stopoverPageReducer } from '../model/slices/stopoverPageSlices';
import { Button } from '@/shared/ui/Button/Button';

export default function StopoverPage() {
    useTitle('Остановки');
    useReducerManager('stopover', stopoverPageReducer);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text tag={TextTag.H1} style={TextStyle.H2}>
                    Остановки
                </Text>
                <Button>Добавить остановку</Button>
            </div>

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
