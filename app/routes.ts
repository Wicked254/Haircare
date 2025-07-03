import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hair-types", "routes/hair-types.tsx"),
] satisfies RouteConfig;
