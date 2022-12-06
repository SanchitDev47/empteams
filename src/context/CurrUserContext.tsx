import react from 'react';

export type UserType = {
    email: string;
    password: string;
}

export type UserContextType ={
    CurrentUser?: UserType;
    setCurrentUser: (user: UserType) => void;
    checkLogin: () => void;
    handleLogout: () => void;
}
