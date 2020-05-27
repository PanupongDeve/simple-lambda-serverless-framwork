import { User } from '../../entities/users/User';
import { UserManger, UserMangerImp } from '../../entities/users/UserManger';

interface UsersPresenter {
    userManger: UserManger;
    getUsers(): Promise<User[]>;
    getUserById(id: String): Promise<User>;

}

class UsersPresenterImp implements UsersPresenter {
    private static instance: UsersPresenter;
    userManger: UserManger = UserMangerImp.getInstance();

    public static getInstance(): UsersPresenter {
        if (!UsersPresenterImp.instance) {
            UsersPresenterImp.instance = new UsersPresenterImp();
        }

        return UsersPresenterImp.instance;
    }

    public async getUsers(): Promise<User[]> {

        const users: User[] = this.userManger.getUsersFromMock();

        return users;
    }

    public async getUserById(id: String): Promise<User> {
        const user: User = this.userManger.getUserByIdFromMock(id);

        return user;
    }
}

const usersPresenter: UsersPresenter = UsersPresenterImp.getInstance();

export {
    UsersPresenter,
    UsersPresenterImp,
    usersPresenter
}