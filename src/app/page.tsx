type User = {
  id: string;
  name: string;
};

const fetchUser = async (path: string): Promise<User> => {
  const res = await fetch(path);
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
  };
};

export default async function Home() {
  const user = await fetchUser("http://localhost:8088/");

  return <p>`{user.id}: {user.name}`</p>
}