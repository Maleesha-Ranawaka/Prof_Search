import { User } from '../models/user.interface'

const userList: User[] = [
    {
        name: 'Anya',
        company: 'IGI',
        location: 'IGI HQ',
        bio: 'Helping and protecting DeltaOps at any cost',
        avatar_url: 'Unknown',
        email: 'anya@igihq.com'
    },
    {
        name: 'Priboy',
        company: 'Priboy&Settings',
        location: 'Bagdag',
        bio: 'Im weapon seller to both enemies and friendlies',
        avatar_url: 'priboy.com',
        email: 'priboy@weaponselling.com'
    }

]

export const USER_LIST = userList;