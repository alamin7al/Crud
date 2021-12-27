import { createContext } from 'react';
import useFarebase from './useFarebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const allContext = useFarebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;