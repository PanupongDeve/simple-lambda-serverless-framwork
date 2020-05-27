import { User } from '../../entities/users/User';
import { UserManger, UserMangerImp } from '../../entities/users/UserManger';

interface UsersCreator {
    userManger: UserManger;
    createUser(user: any): Promise<User[]>;
    // updateUser(id, user: any): Promise<User[]>;
    // deleteUser(id, user: any): Promise<User[]>;

}

class UsersCreatorImp {
    private static instance: UsersCreator;
    userManger: UserManger = UserMangerImp.getInstance();

    public static getInstance(): UsersCreator {
        if (!UsersCreatorImp.instance) {
            UsersCreatorImp.instance = new UsersCreatorImp();
        }

        return UsersCreatorImp.instance;
    }

    public async createUser(user: any): Promise<User[]> {
        const users: User[] = this.userManger.createUserToMock(user);
        return users;
    }
}

const usersCreator: UsersCreator = UsersCreatorImp.getInstance();

export {
    UsersCreator,
    UsersCreatorImp,
    usersCreator
}