import ArticleForm from "@/components/ArticleForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ArticleForm />
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         Article SEO System
//       </h1>

//       <p className="text-gray-600">
//         Submit your article for automated SEO processing.
//       </p>
//     </main>
//   );
// }