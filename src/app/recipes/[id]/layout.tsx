async function getRecipeById(id: string) {
  const res = await fetch(`http://127.0.0.1:5000/recipe/${id}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const postPromise = getRecipeById(params.id);
  const [post] = await Promise.all([postPromise]);
  return {
    title: `Goodeats | ${post.name}`,
  };
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}