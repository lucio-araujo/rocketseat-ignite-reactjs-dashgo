import { useQuery } from "react-query";
import { User } from "@/models/user";
import { api } from "../api";

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  console.log("totalCount", totalCount);

  const users = data.users.map((user: User) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };

}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, //5 seconds
  });
}
