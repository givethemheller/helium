import { User } from "./models/User";

/**
 * @tsoaModel
 */
export type OmitOverride<T, K> = Pick<T, Exclude<keyof T, K>>;

//  to use with  features for model controllers and services
export interface Pagination {
  page: number;
  count: number;
}

export interface StandardResponse {
  data?: any;
  error?: CustomError;
}

export interface CustomError {
  rawError: any;
  userMessage?: string;
  code: number;
}

export type CustomWebToken = string;
export type CustomWebTokenContents = {
  scopes: string[];
};

export type UserAuthorization = {
  owner: User;
};


export class ApiError extends Error {
  private status: number;
  constructor(name: string, status: number, message?: string) {
    super(message);
    this.name = name;
    this.status = status;
  }
  public logger() {
    console.log(this.status);
  }
}
