import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button/Button';
import { getUserAuthData, userActions } from '@/entities/User';
import IconInfo from '@/shared/assets/icons/info-circle.svg';
import IconUser from '@/shared/assets/icons/user.svg';
import cls from './AvatarButton.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

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

    const fallback = <Skeleton className={cls.AvatarButton__avatar} />;
    const errorFallback = (
        <IconUser className={classNames(
            cls.AvatarButton__avatar,
            cls.AvatarButton__avatar_fallback,
        )}
        />
    );

    if (!authData) {
        return null;
    }

    return (
        <div className={classNames(cls.AvatarButton, className)}>
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                className={cls.AvatarButton__avatar}
                src="https://sea2.discourse-cdn.com/business7/user_avatar/forum.codewithmosh.com/adomovic/48/5754_2.png"
                alt={authData.username}
            />
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
