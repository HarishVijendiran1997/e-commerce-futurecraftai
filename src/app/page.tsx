import Image from "next/image";

export default function Home() {
  return (
    <>
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">E-commerce Admin</h1>
      <p className="mt-4 text-lg">
        This is a simple admin dashboard for an e-commerce application.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="E-commerce Dashboard"
        width={500}
        height={300}
        className="mt-8 rounded-lg shadow-lg"
      />
    </main>
    </>
  );
}
