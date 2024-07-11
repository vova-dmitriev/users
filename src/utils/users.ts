import { IName, IUser } from "@/interfaces";

export const formatUserName = (userName: IName) => {
  return `${userName.firstname} ${userName.lastname}`;
};

export const searchUser = (users: IUser[], query: string) => {
  const caseInsensitiveQuery = query.toLowerCase();

  const checkName = (user: IUser) =>
    user.name.firstname.toLowerCase().includes(caseInsensitiveQuery) ||
    user.name.lastname.toLowerCase().includes(caseInsensitiveQuery);

  const checkEmail = (user: IUser) =>
    user.email.toLowerCase().includes(caseInsensitiveQuery);

  const checkPhone = (user: IUser) =>
    user.phone.toLowerCase().includes(caseInsensitiveQuery);

  return users.filter(checkName || checkEmail || checkPhone);
};
