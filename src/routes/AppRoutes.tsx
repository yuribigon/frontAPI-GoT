import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import CharactersPage from "../pages/CharactersPage";

function AppRoutes(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CharactersPage/>}></Route>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;