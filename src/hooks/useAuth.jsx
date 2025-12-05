import { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';

export default function useAuth() {
    return useContext(AuthContext);
}
