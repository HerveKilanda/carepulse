import { Button } from "./components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl font-bold text-center">
        Welcome to your Carepulse dashboard
      </h1>
      <p className="text-center text-lg mt-4">
        You can now manage your patients
      </p>
      <Button className="mt-2 rounded-full text-md">Valider</Button>
    </div>
  );
}
