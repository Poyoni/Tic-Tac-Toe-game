import { User } from '../models/userModel.js';
import jsonfile from 'jsonfile';

const file = './users.json';

export const getUsers = async (): Promise<User[]> => {
  return jsonfile.readFile(file);
};

export const saveUsers = async (users: User[]): Promise<void> => {
  await jsonfile.writeFile(file, users, { spaces: 2 });
};
