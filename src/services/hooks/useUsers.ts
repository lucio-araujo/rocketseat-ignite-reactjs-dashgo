import { useQuery } from "react-query";
import { User } from "@/models/user";
import { api } from "../api";


export async function getUsers(): Promise<User[]> {
  const { data } = await api("/users");
  return data.users.map((user: User) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  });
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, //5 seconds
  });
}
