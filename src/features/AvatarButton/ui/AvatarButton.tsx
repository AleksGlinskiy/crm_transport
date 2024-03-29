import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';
import { getUserAuthData, userActions } from '@/entities/User';
import IconInfo from '@/shared/assets/icons/info-circle.svg';
import cls from './AvatarButton.module.scss';
import { Image } from '@/shared/ui/Image/Image';

interface AvatarButtonProps {
    className?: string;
}

export function AvatarButton(props: AvatarButtonProps) {
    const { className } = props;

    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const handleLogout = () => {
        dispatch(userActions.logoutAuthData());
    };

    if (!authData) {
        return null;
    }

    return (
        <div className={classNames(cls.AvatarButton, className)}>
            <Image className={cls.AvatarButton__avatar} src="11" />
            <div className={cls.AvatarButton__text}>
                <div className={cls.AvatarButton__name}>{authData.username}</div>
                <div className={cls.AvatarButton__role}>admin</div>
            </div>
            <Button className={cls.AvatarButton__btn} onClick={() => handleLogout()}>
                <IconInfo />
            </Button>
        </div>
    );
}
