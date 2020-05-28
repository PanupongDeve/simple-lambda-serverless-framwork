import { User } from '../core/entities/users/User';
import { usersPresenter } from '../core/useCases/users/UsersPresenter';
import { usersCreator } from '../core/useCases/users/UsersCreator';

class UserController {
    private static instance: UserController;

    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }

        return UserController.instance;
    }

    async getAll(): Promise<User[]> {
        const users: User[] = await usersPresenter.getUsers();
        return users;
    }

    async getById(id: any): Promise<User> {
        const user: User = await usersPresenter.getUserById(id);

        return user;
    }

    async create(user: any) {
        const users: User[] = await usersCreator.createUser(user);

        return users;
    }

    async updateById(id: String, user: any) {
        const users: User[] = await usersCreator.updateUser(id, user);

        return users;
    }

    async removeById(id: String) {
        const users: User[] = await usersCreator.deleteUser(id);
        return users;
    }

}


const userController = UserController.getInstance();


export {
    UserController,
    userController
}


