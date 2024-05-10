import {PublicClientApplication , PublicClientNext} from "@azure/msal-browser";

export let MsalInstance = new PublicClientApplication({
    auth: {
        clientId: '3be519ee-a139-4dbd-a818-532334652579',
        authority: '/',
        redirectUri: '/',
        postLogoutRedirectUri: '/',
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    }
});


export const loginRequest = {
    scopes: ['user.read']
}