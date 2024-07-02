import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);

    const now = new Date();
    const durationleft = expirationDate.getTime() - now.getTime()

    return durationleft;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    const tokenDuration = getTokenDuration();
    if(tokenDuration < 0) {
        return 'EXPIRED';
    }
    return token;

}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if(!token) 
        return redirect('/auth');
    else
        return null;
}