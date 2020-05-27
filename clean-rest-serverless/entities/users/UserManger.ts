import { User, UserImp } from './User';
import { usersMock } from '../../services/mocks/usersMock';


interface UserManger {
    
    createUserToMock(user: any): User[];
    getUsersFromMock(): User[];
    getUserByIdFromMock(id: String): User;
    // updateByidFromMock(id: string, data: any): User;
    // deleteByidFromMock(id: string): User;

    autoGenerateIdFromMock(): Number;
    filterUsersById(id: String, users: User[]): User;

    // createUserFromHttp(user: any): User[];
    // getUsersFromHttp(): User[];
    // getUserByIdFromHttp(id: string): User;
    // updateByidFromHttp(id: string, data: any): User;
    // deleteByidFromHttp(id: string): User;

    mappingFromDataSourceToUsers(users: any[]): User[];
    mappingFromHttpBodytoUser(user: any): User;

}


class UserMangerImp implements UserManger {
    private static instance: UserManger;
    private constructor() { }

    public static getInstance(): UserManger {
        if (!UserMangerImp.instance) {
            UserMangerImp.instance = new UserMangerImp();
        }

        return UserMangerImp.instance;
    }
    

    

    public getUsersFromMock(): User[] {
         
        const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);

        return users;
    }

    public getUserByIdFromMock(id: String): User {
        const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);
        const user: User = this.filterUsersById(id, users);

        return user;
    }

    public createUserToMock(user: any): User[] {
        user.id = this.autoGenerateIdFromMock();
        const userMapped: User = this.mappingFromHttpBodytoUser(user);
        usersMock.push(userMapped);

        const users: User[] = this.getUsersFromMock();

        return users;
    }

    public mappingFromDataSourceToUsers(users: any[]): User[] {
        const mappedUsers: User[] = users.map((user) => {
            return new UserImp(user);
        });

        return mappedUsers;
    }

    public mappingFromHttpBodytoUser(user: any): User {
        const mappeduser: User = new UserImp(user);
        return mappeduser;
    }

    public autoGenerateIdFromMock(): Number {
        const id: Number = (usersMock.length - 1) + 1;

        return id;
    }
    
    public filterUsersById(id: String, users: User[]): User {
        const handleFilteruserById = (user) => Number(user.id) === Number(id);
        const user: User = users.filter(handleFilteruserById)[0];

        return user;
    }
}


export {
    UserManger,
    UserMangerImp
}