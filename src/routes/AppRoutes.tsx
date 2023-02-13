import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import IdPage from "../pages/IdPage";

function AppRoutes(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CharactersPage/>}></Route>
                    <Route path="/character/:id" element={<IdPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;