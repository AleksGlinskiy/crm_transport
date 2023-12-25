import {AuthPage} from "pages/AuthPage";
import './styles/style.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createReduxStore} from "app/store/store";
import {AppRouter} from "app/providers/router";

export default function App() {
    return (
        <Provider store={createReduxStore()}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}