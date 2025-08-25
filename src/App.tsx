import { NavigationMenuDemo } from "./components/navigation/navigation.component";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <NavigationMenuDemo />
      <h1>New Project</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant={"outline"}>Click me</Button>
      </div>
    </>
  );
}

export default App;
