import { UsuarioInterface } from './UsuarioInterface';

export class UsuarioClass implements UsuarioInterface{
    public id: number;    
    public email: string;
    public name: string;
    public username: string;

    constructor(){

    }

    public getId(){
        return this.id;
    }
    public getEmail(){
        return this.email;
    }
    public getName(){
        return this.name;
    }
    public getUsername(){
        return this.username;
    }
    
}