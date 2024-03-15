import { FaSignInAlt } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen max-w-lg mx-auto flex flex-col space-y-5 items-center justify-center">
      <div className="flex flex-row space-x-3 items-center justify-center">
        <Button size="small">Default</Button>
        <Button size="small" sx="rounded-full" color="primary">
          Primary
        </Button>
        <Button size="small" sx="rounded-full" color="success">
          Success
        </Button>
        <Button size="small" sx="rounded-full" color="warning">
          Warning
        </Button>
        <Button size="small" sx="rounded-full" color="danger">
          Danger
        </Button>
        <Button size="small" sx="rounded-full" color="primary" loading={true}>
          Loading
        </Button>
      </div>
      <div className="flex flex-row space-x-3 items-center justify-center">
        <Button>Default</Button>
        <Button sx="rounded-full" color="primary">
          Primary
        </Button>
        <Button sx="rounded-full" color="success">
          Success
        </Button>
        <Button sx="rounded-full" color="warning">
          Warning
        </Button>
        <Button sx="rounded-full" color="danger">
          Danger
        </Button>
        <Button sx="rounded-full" color="primary" loading={true}>
          Loading
        </Button>
      </div>
      <div className="flex flex-row space-x-3 items-center justify-center">
        <Button size="large">
          Default <FaSignInAlt className="ml-2" />
        </Button>
        <Button size="large" sx="rounded-full" color="primary">
          Primary
          <FaSignInAlt className="ml-2" />
        </Button>
        <Button size="large" sx="rounded-full" color="success">
          Success
          <FaSignInAlt className="ml-2" />
        </Button>
        <Button size="large" sx="rounded-full" color="warning">
          Warning
          <FaSignInAlt className="ml-2" />
        </Button>
        <Button size="large" sx="rounded-full" color="danger">
          Danger
          <FaSignInAlt className="ml-2" />
        </Button>
        <Button size="large" sx="rounded-full" color="primary" loading={true}>
          Loading
        </Button>
      </div>
      <div className="flex flex-row space-x-3 items-center justify-center">
        <Button size="large" disabled>
          Default
        </Button>
        <Button size="large" sx="rounded-full" color="primary" disabled>
          Primary
        </Button>
        <Button size="large" sx="rounded-full" color="success" disabled>
          Success
        </Button>
        <Button size="large" sx="rounded-full" color="warning" disabled>
          Warning
        </Button>
        <Button size="large" sx="rounded-full" color="danger" disabled>
          Danger
        </Button>
        <Button
          size="large"
          sx="rounded-full"
          color="primary"
          loading={true}
          disabled
        >
          Loading
        </Button>
      </div>
    </div>
  );
}

export default App;
