import { createServer, Factory, Model, Response, Server } from "miragejs";
import { User } from "../../models/user";
import { faker } from "@faker-js/faker";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name: (index: number) => `User ${index + 1}`,
        email: (index: number) => faker.internet.email().toLowerCase(),
        created_at: () => faker.date.past(),
      }),
    },
    seeds(server: Server) {
      server.createList("user", 200);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", (schema, request) => {
        const { page = 1, perPage = 10 } = request.queryParams;

        const allUsers = schema.all("user");

        const totalCount = allUsers.length;
        const numStart = (Number(page) - 1) * Number(perPage);
        const numEnd = numStart + Number(perPage);

        const users = allUsers.models.slice(numStart, numEnd);

        return new Response(
          200,
          {
            "x-total-count": String(totalCount),
          },
          { users }
        );
      });

      this.post("users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
