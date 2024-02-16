import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export function NotFoundPage() {
    return (
        <div>
            <h1>Страница не найдена</h1>

            <Link to={RoutePath.dashboard}>На главную</Link>
        </div>
    );
}
