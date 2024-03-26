import Link from "next/link";

export default function Home() {
  return (
    <main className="w-1/2 p-4 mx-auto mt-48 text-center bg-gray-300 rounded-lg">
      <div className="">
        <h1 className="text-2xl mb-4 ">LRS Quiz</h1>
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
