import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { ButtonVariants, Button } from '@/shared/ui/Button';
import {
    getStopoverDetailsReadonly,
    getStopoverDetailsData,
    getStopoverDetailsFormIsLoading,
} from '@/entities/Stopover/model/selectors/stopoverDetail';
import { stopoverDetailActions } from '@/entities/Stopover/model/slice/StopoverDetailSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { PageHeader } from '@/widgets/PageHeader';
import cls from './StopoverDetailCardHeader.module.scss';
import { updateStopoverData } from '@/entities/Stopover/model/services/updateStopoverData/updateStopoverData';

interface StopoverDetailCardHeaderProps {
    className?: string;
    title?: string;
}

export function StopoverDetailCardHeader(props: StopoverDetailCardHeaderProps) {
    const { className, title } = props;

    const dispatch = useAppDispatch();
    const stopover = useSelector(getStopoverDetailsData);
    const readonly = useSelector(getStopoverDetailsReadonly);
    const formIsLoading = useSelector(getStopoverDetailsFormIsLoading);

    const onEdit = () => {
        dispatch(stopoverDetailActions.setReadonly(false));
    };

    const onCancelEdit = () => {
        dispatch(stopoverDetailActions.cancelEdit());
    };

    const onSave = () => {
        if (stopover?.id) {
            dispatch(updateStopoverData(String(stopover?.id)));
        }
    };

    let actions;
    if (readonly) {
        actions = formIsLoading ? (
            <Button variant={ButtonVariants.PROCESS}>Сохранение</Button>
        ) : (
            <Button onClick={onEdit}>Редактировать</Button>
        );
    } else {
        actions = (
            <div className={cls.StopoverDetailCardHeader__btns}>
                <Button onClick={onSave}>Сохранить</Button>
                <Button variant={ButtonVariants.OUTLINE} onClick={onCancelEdit}>
                    Отменить
                </Button>
            </div>
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
