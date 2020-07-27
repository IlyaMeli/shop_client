export async function loginCall({ user_name, password }) {
  const response = await fetch(
    `https://arcane-citadel-42275.herokuapp.com/api/users/login-user`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: "cookieString",
      },
      body: JSON.stringify({
        user_name,
        password,
      }),
    }
  );

  const res = await response.json();
  if (response.status !== 200) {
    throw new Error(res);
  }
  return res;
}

export async function registerCall({ name, email, user_name, password }) {
  const response = await fetch(
    `https://arcane-citadel-42275.herokuapp.com/api/users/reg-user`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        user_name,
        password,
      }),
    }
  );
  const res = await response.json();
  if (response.status !== 200) {
    throw new Error(res);
  }
  return res;
}
