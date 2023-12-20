import {AuthPage} from "pages/AuthPage";
import './styles/style.scss';
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <AuthPage />
        </BrowserRouter>
    )
}