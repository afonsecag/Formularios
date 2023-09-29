import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CafeList from './components/CafeList';
import CafeDetail from './components/CafeDetail';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [selectedCafeId, setSelectedCafeId] = useState(null);

    if (!authenticated) {
        return <LoginForm onAuthenticate={() => setAuthenticated(true)} />;
    }

    if (selectedCafeId) {
        return <CafeDetail cafeId={selectedCafeId} onBack={() => setSelectedCafeId(null)} />;
    }

    return <CafeList onSelectCafe={(id) => setSelectedCafeId(id)} />;
}

export default App;