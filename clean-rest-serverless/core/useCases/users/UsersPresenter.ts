import { User } from '../../entities/users/User';
import { UserEntity, UserEntityFromMockImp } from '../../entities/users/UserEntity';

interface UsersPresenter {
    userEntity: UserEntity;
    getUsers(): Promise<User[]>;
    getUserById(id: String): Promise<User>;

}

class UsersPresenterImp implements UsersPresenter {
    private static instance: UsersPresenter;
    userEntity: UserEntity;

    private constructor(userEntity: UserEntity) {
        this.userEntity = userEntity;
    }

    public static getInstance(): UsersPresenter {
        if (!UsersPresenterImp.instance) {
            UsersPresenterImp.instance = new UsersPresenterImp(new UserEntityFromMockImp());
        }

        return UsersPresenterImp.instance;
    }

    public async getUsers(): Promise<User[]> {

        const users: User[] = this.userEntity.getUsers();

        return users;
    }

    public async getUserById(id: String): Promise<User> {
        const user: User = this.userEntity.getUserById(id);

        return user;
    }
}

const usersPresenter: UsersPresenter = UsersPresenterImp.getInstance();

export {
    UsersPresenter,
    usersPresenter
}