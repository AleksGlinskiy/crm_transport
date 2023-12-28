import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export default function DashboardPage() {
    return (
        <div>
            <h1>Панель управления</h1>

            <Link to={RoutePath.about}>About</Link>
        </div>
    )
}