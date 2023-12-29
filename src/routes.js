// import Inicio from "pages/Inicio"
// import { BrowserRouter, Route, Routes } from "react-router-dom"

// function AppRoutes() {
//     return(
//         <BrowserRouter> //aqui ele está avisando que vão ter algumas rotas aqui dentro
//         <Routes> //aqui ele funciona como um roteador. Ele quem é responsável pela troca de rotas
//             <Route path="/" element={<Inicio />}></Route> //essa é a página inicial. Portanto n tem rota aqui.
//         </Routes>
//         </BrowserRouter>
//     )
// }

// export default AppRoutes

import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;