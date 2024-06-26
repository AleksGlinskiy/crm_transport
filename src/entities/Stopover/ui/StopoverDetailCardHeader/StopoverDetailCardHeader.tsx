import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ButtonVariants, Button } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageHeader } from '@/widgets/PageHeader';
import {
    getStopoverDetailsData,
    getStopoverDetailsFormIsLoading,
} from '../../model/selectors/stopoverDetail';
import { stopoverDetailActions } from '../../model/slice/StopoverDetailSlice';
import { updateStopoverData } from '../../model/services/updateStopoverData/updateStopoverData';
import cls from './StopoverDetailCardHeader.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface StopoverDetailCardHeaderProps {
    className?: string;
    title?: string;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
}

export function StopoverDetailCardHeader(props: StopoverDetailCardHeaderProps) {
    const { className, title, isLoading, error, readonly } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const stopover = useSelector(getStopoverDetailsData);
    const formIsLoading = useSelector(getStopoverDetailsFormIsLoading);

    const onEdit = () => {
        dispatch(stopoverDetailActions.setReadonly(false));
        navigate(`${RoutePath.stopover_edit}${String(stopover?.id)}/edit/`);
    };

    const onBack = () => {
        dispatch(stopoverDetailActions.cancelEdit());
        navigate(`${RoutePath.stopover_details}${String(stopover?.id)}`);
    };

    const onBackPage = () => {
        navigate(RoutePath.stopover);
    };

    const onSave = () => {
        if (stopover?.id) {
            dispatch(updateStopoverData(String(stopover?.id)));
        }
        navigate(`${RoutePath.stopover_details}${String(stopover?.id)}`);
    };

    if (isLoading) {
        return (
            <HStack gap='16' justify='between'>
                <Skeleton width='45%' height='60px' border='20px' />
                <Skeleton width='180px' height='60px' border='20px' />
            </HStack>
        );
    }

    let actions;
    if (readonly) {
        actions = formIsLoading ? (
            <Button loading>Сохранение</Button>
        ) : (
            <HStack gap='16'>
                <Button onClick={onBackPage} variant={ButtonVariants.OUTLINE}>
                    Назад
                </Button>
                <Button onClick={onEdit}>Редактировать</Button>
            </HStack>
        );
    } else {
        actions = (
            <HStack gap='16'>
                <Button onClick={onBack} variant={ButtonVariants.OUTLINE}>
                    Отменить Редактирование
                </Button>
                <Button onClick={onSave}>Сохранить</Button>
            </HStack>
        );
    }

    return (
        <PageHeader
            className={classNames(className, cls.StopoverDetailCardHeader)}
            title={title}
            actions={actions}
        />
    );
}
