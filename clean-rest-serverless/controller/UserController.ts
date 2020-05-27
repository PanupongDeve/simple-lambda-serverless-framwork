import { User } from '../entities/users/User';
import { usersPresenter } from '../useCases/users/UsersPresenter';
import { usersCreator } from '../useCases/users/UsersCreator';

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

    async updateById() {

    }

    async removeById() {

    }

}


const userController = UserController.getInstance();


export {
    UserController,
    userController
}


