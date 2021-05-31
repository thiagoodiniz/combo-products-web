
export class UserService {

    login(userName: string, password: string): boolean { 
        if(userName === 'thiago' && password === '123'){
            return true;
        } else {
            return false;
        }
    }

}