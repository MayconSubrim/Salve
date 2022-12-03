import { Api } from "../Services/Api";

export function setUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = Api.post("login", {
      email,
      password,
    });
    return request;
  } catch (error) {
    return null;
  }
}

export async function SignupRequest(email, password) {
  try {
    const request = Api.post("register", {
      email,
      password,
    });
    return request;
  } catch (error) {
    return null;
  }
}