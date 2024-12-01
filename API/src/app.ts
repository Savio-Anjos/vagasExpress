import fastify from "fastify";
import { ZodError } from "zod";
import fastifyJwt from "@fastify/jwt";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env";
import { candidatesRoutes } from "./http/controllers/candidates/routes";
import { recruitersRoutes } from "./http/controllers/recruiters/routes";

export const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(candidatesRoutes);
app.register(recruitersRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  reply.status(500).send({ message: "Internal server error." });
});

app.get("/", async (req, res) => {
  res.send("Welcome to the composisound API");
});
