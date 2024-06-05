import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    StopoverDetailCard,
    getStopoverDetailsForm,
    stopoverDetailActions,
    stopoverDetailReducer,
} from '@/entities/Stopover';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import useReducerManager from '@/shared/lib/hooks/useReducerManager';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { createStopoverData } from '@/entities/Stopover/model/services/createStopoverData/createStopoverData';
import { PageHeader } from '@/widgets/PageHeader';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack, VStack } from '@/shared/ui/Stack';

interface CreateStopoverCardProps {
    className?: string;
}

const Reducers = {
    stopoverDetails: stopoverDetailReducer,
};

export function CreateStopoverCard(props: CreateStopoverCardProps) {
    useReducerManager(Reducers);

    const { className } = props;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const stopoverForm = useSelector(getStopoverDetailsForm);

    const onChangeName = (value?: string) => {
        dispatch(
            stopoverDetailActions.updateStopoverData({ name: value || '' }),
        );
    };

    const onChangeCoordinates = (value?: string) => {
        if (value) {
            const coordinates = value.split(',').map(parseFloat);
            dispatch(
                stopoverDetailActions.updateStopoverData({
                    coordinates: coordinates || [0, 0],
                }),
            );
        }
    };

    const onChangeDescription = (value?: string) => {
        dispatch(
            stopoverDetailActions.updateStopoverData({
                description: value || '',
            }),
        );
    };

    const onSave = () => {
        dispatch(createStopoverData());
        navigate(RoutePath.stopover);
    };

    const onBack = () => {
        navigate(RoutePath.stopover);
    };

    return (
        <VStack className={classNames(className)} gap='32'>
            <PageHeader
                title='Новый остановочный пункт'
                actions={
                    <HStack gap='16'>
                        <Button
                            onClick={onBack}
                            variant={ButtonVariants.OUTLINE}
                        >
                            Назад
                        </Button>
                        <Button onClick={onSave}>Сохранить</Button>
                    </HStack>
                }
            />

            <StopoverDetailCard
                data={stopoverForm}
                onChangeName={onChangeName}
                onChangeCoordinates={onChangeCoordinates}
                onChangeDescription={onChangeDescription}
            />
        </VStack>
    );
}
