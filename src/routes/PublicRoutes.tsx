import { lazy } from "react";
import { IRoute } from "@/interfaces";
import { PUBLIC_ROUTES } from "./constants";

export const publicRoutes: IRoute[] = [
  {
    path: PUBLIC_ROUTES.HOME,
    name: "Home",
    component: lazy(() => import("@/pages/HomePage/HomePage")),
  },
  {
    path: PUBLIC_ROUTES.USERS,
    name: "Users",
    component: lazy(() => import("@/pages/UsersPage/UsersPage")),
  },
];
