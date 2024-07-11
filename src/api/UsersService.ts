import api from "./http";
import { IUserResponse, IUsersRequestParams } from "@/interfaces";

export default class UsersService {
  static async loadUsers(params?: IUsersRequestParams): Promise<IUserResponse> {
    const url = params?.limit ? `/users?limit=${params.limit}` : "/users";
    return api.get(url);
  }
}
