import { ROUTES } from "~/constants";

export interface UserCredentials {
  email: string;
  password: string;
}

export default function () {
  const config = useRuntimeConfig();

  const user = useState<User | null>("auth.user", () => null);
  const token = useState<string | null>("auth.token", () => null);
  const isLoading = useState<boolean>("auth.loading", () => false);

  const clearAuth = () => {
    user.value = null;
    token.value = null;
  };

  const login = async (credentials: UserCredentials) => {
    isLoading.value = true;
    try {
      const res = await $fetch<
        { success: true; user: User; token: string } | { success: false }
      >(config.public.apiBackend + ROUTES.API.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
        credentials: "include",
      });

      if (!res.success)
        return {
          success: false,
        };

      user.value = res.user;
      token.value = res.token;
      await navigateTo(ROUTES.PAGES.DASHBOARD, { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    isLoading.value = true;
    try {
      await $fetch(config.public.apiBackend + ROUTES.API.AUTH.LOGOUT);
      clearAuth();
      await navigateTo(ROUTES.PAGES.LOGIN);
    } catch (error) {
      console.log("error", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    user: readonly(user),
    token: readonly(token),
    isLoading: readonly(isLoading),
    login,
    logout,
  };
}
