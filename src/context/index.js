import {createContext, useContext} from 'react';
import AuthContextProvider from './AuthContextProvider';
import CartProvider, { CartContext } from './CartProvider';

const AuthContext = createContext()

const useAuth = () => {
    const context =  useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}   

const useCart = () => {
    const context =  useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within an AuthProvider')
    }
    return context
}  
export {AuthContext, AuthContextProvider, useAuth, CartProvider, CartContext, useCart}