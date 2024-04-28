import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

export function PageLoader() {
    return (
        <div className={cls.PageLoader}>
            <Loader />
        </div>
    );
}
