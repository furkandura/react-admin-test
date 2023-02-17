import {Admin, ListGuesser, Resource, CustomRoutes} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {Route} from "react-router-dom";
import Login from "./components/pages/Login";

import authProvider from './authProvider';

const dataProvider = simpleRestProvider("http://one-click-api.local/api");

const App = () => (
    <>
        <Admin dataProvider={dataProvider} loginPage={<Login/>} authProvider={authProvider}>

            <CustomRoutes>
                <Route path="/register" element={<Login />} />
            </CustomRoutes>
        </Admin>
    </>
);

export default App;
