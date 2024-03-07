// https://eco-api-one.vercel.app/api/user/login
export const RegisterPost = async (user) => {
  console.log(user);
  console.log(user);
  const response = await fetch(
    "https://eco-api-one.vercel.app/api/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const result = await response.json();
  return result;
};
