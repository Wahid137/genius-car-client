import React, { createContext } from 'react';
import { getAuth } from 
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;