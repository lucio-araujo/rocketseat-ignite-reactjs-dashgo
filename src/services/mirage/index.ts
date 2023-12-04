import { createServer, Factory, Model, Server } from "miragejs";
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
      server.createList("user", 50);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
