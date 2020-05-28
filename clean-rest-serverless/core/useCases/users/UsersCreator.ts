import { User } from '../../entities/users/User';
import { UserEntity, UserEntityFromMockImp } from '../../entities/users/UserEntity';

interface UsersCreator {
    userEntity: UserEntity;
    createUser(user: any): Promise<User[]>;
    updateUser(id: String, user: any): Promise<User[]>;
    deleteUser(id: String): Promise<User[]>;

}

class UsersCreatorImp {
    private static instance: UsersCreator;
    userEntity: UserEntity;

    private constructor(userEntity: UserEntity) {
        this.userEntity = userEntity;
    }

    public static getInstance(): UsersCreator {
        if (!UsersCreatorImp.instance) {
            UsersCreatorImp.instance = new UsersCreatorImp(new UserEntityFromMockImp());
        }

        return UsersCreatorImp.instance;
    }

    public async createUser(user: any): Promise<User[]> {
        const users: User[] = this.userEntity.createUser(user);
        return users;
    }

    public async updateUser(id: String, user: any): Promise<User[]> {
        const users: User[] = this.userEntity.updateByid(id, user);
        return users;
    }

    public async deleteUser(id: String): Promise<User[]> {
        const users: User[] = this.userEntity.deleteByid(id);
        return users;
    }
}

const usersCreator: UsersCreator = UsersCreatorImp.getInstance();

export {
    UsersCreator,
    usersCreator
}