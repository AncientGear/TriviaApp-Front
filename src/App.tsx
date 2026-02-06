import { useNavigate, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Quiz from "./components/Quiz/Quiz.tsx";
import Start from "./components/Start.tsx";
import Highscore from "./components/Highscore/Highscore.tsx";
import NotFoundElement from "./components/Elements/NotFoundElement.tsx";

import './App.scss'

function App() {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={
                        <Start
                            onStart={() => navigate('/quiz')}
                            onHighscore={() => navigate('/highscore')}
                        />
                    } />
                    
                    <Route path="/quiz" element={
                        <Quiz onNavigateToHighscore={() => navigate('/highscore')} />
                    } />
                    
                    <Route path="/highscore" element={
                        <Highscore onBack={() => navigate('/')} />
                    } />

                    <Route path="*" element={<NotFoundElement />} />
                </Routes>
            </Container>
        </>
    )
}

export default App
