
export class UserService {
    private accessTokenCookieKey: string = '@access_token'; 

    login(userName: string, password: string): boolean { 
        if(userName === 'thiago' && password === '123'){
            localStorage.setItem(this.accessTokenCookieKey, JSON.stringify(true));
            return true;
        } else {
            return false;
        }
    }

    static isLogged(): boolean {
        const accessTokenCookieKey = new UserService().accessTokenCookieKey;
        const storageValue = localStorage.getItem(accessTokenCookieKey);
        return storageValue && JSON.parse(storageValue);
    }

}