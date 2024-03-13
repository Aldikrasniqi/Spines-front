interface User {
  name: string;
  age: number;
  email: string;
}

const loaduser = async (username: string): Promise<User | undefined> => {
  const users: User[] = [
    { name: 'John', age: 25, email: 'john@email.com' },
    { name: 'Aldi', age: 18, email: 'aldi@email.com' },
  ];
  return users.find((user) => user.name === username);
};

export const loadUserData = async (username: string): Promise<User | undefined> => {
    return await loaduser(username); 
};
