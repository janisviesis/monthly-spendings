import React, { lazy, Suspense } from 'react';
import './App.css';

const MonthlySpendings = lazy(() => import('./views/MonthlySpendings'));

function App() {
    return (
        <>
            <Suspense fallback="">
                <MonthlySpendings />
            </Suspense>
        </>
    );
}

export default App;
