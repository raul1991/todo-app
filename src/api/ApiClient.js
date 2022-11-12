import axios, { AxiosError } from "axios";

// export type Todo = {
//   content: string;
// };

// export type TodoAppResponse = {
//   code: number;
//   message: string;
// };

export class ApiClient {
  baseUrl;
  userId;

  constructor(baseUrl, userId) {
    this.baseUrl = baseUrl;
    this.userId = userId;
  }

  listTodos = async () =>
    await axios
      .get(this.baseUrl)
      .then((res) => res.data._embedded.todos)
      .catch((err) => {
        return { code: err.status, message: err.statusText };
      });
  saveTodo = async (todo) =>
    await axios
      .post(`${this.baseUrl}`, {
        content: `${todo.title}\n${todo.description}`,
      })
      .then((res) => {})
      .catch((err) => {
        return { code: err.status, message: err.statusText };
      });
}
