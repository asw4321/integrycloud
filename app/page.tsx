export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
         <img
        src="/logo/integry_logo.png"
        alt="Integry logo"
        width="56"
      />
        <h1 className="text-4xl font-bold tracking-tight">
          Integry Cloud
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Guided workflows for complex cloud integrations.
        </p>
        <p className="mt-6 text-gray-500">
          Stop deciphering vendor docs. Integry Cloud turns real-world
          integration knowledge into step-by-step flows engineers can trust.
        </p>
      </div>
    </main>
  );
}
