import { User, UserImp } from './User';
import { usersMock } from '../../services/mocks/usersMock';


interface UserManger {
    
    createUserToMock(user: any): User[];
    getUsersFromMock(): User[];
    getUserByIdFromMock(id: String): User;
    updateByidFromMock(id: String, user: any): User[];
    deleteByidFromMock(id: String): User[];

    autoGenerateIdFromMock(): Number;
    filterUsersById(id: String, users: User[]): User;

    // createUserFromHttp(user: any): User[];
    // getUsersFromHttp(): User[];
    // getUserByIdFromHttp(id: string): User;
    // updateByidFromHttp(id: string, data: any): User;
    // deleteByidFromHttp(id: string): User;

    mappingFromDataSourceToUsers(users: any[]): User[];
    mappingFromHttpBodytoUser(user: any): User;
    updateUserMockAttribute(user: User, userUpdated: User): User;

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

    public updateByidFromMock(id: String, user: any): User[] {
        const userMapped: User = this.mappingFromHttpBodytoUser(user);
        const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);

        let usersUpdated: User[] = users.map((user) => {
            if (Number(user.id) === Number(id)) {
                const indexId = Number(id);
                let userUpdated:User = this.updateUserMockAttribute(users[indexId], userMapped);
                return userUpdated;
            } else {
                return user;
            }
        })

        return usersUpdated;
    }

    public deleteByidFromMock(id: String): User[] {
        const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);

        let userUpdated: User[] = users.map((user) => {
            if (Number(user.id) === Number(id)) {
                const indexId = Number(id);
                usersMock[indexId] = null;
                user = null;
                return user;
            } else {
                return user;
            }
        });

        return userUpdated;
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

    public updateUserMockAttribute(user: User, userUpdated: User): User {
        user.firstName = userUpdated.firstName ? userUpdated.firstName : user.firstName;
        user.lastName = userUpdated.lastName ? userUpdated.lastName: user.lastName;

        return user;
    }
}


export {
    UserManger,
    UserMangerImp
}