import { Injectable } from '@nestjs/common';

const users: User[] = [
    { name: 'philipe', id: 1 },
    { name: 'patrick', id: 2 },
    { name: 'everton', id: 3 }
];

export interface User {
    id: number;
    name: string;
}

@Injectable()
export class UserRepository {
    findAll() {
        return users;
    }

    create(user: User) {
        users.push({ ...user, id: Math.random() * 1000 });

        return user;
    }

    count() {
        return users.length;
    }
}
