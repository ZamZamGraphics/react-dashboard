import { useState } from "react";
import Alerts from "./components/Alerts";
import Headers from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="antialiased text-slate-700 dark:text-slate-400 bg-gray-100 dark:bg-slate-800">
      {open && (
        <div className="w-full h-screen backdrop-blur-sm bg-black/50 fixed bottom-0 z-50"></div>
      )}
      <Sidebar open={open} />
      <Headers onOpen={() => setOpen(!open)} />
      <div className="ml-0 md:ml-[15rem] p-5 space-y-5">
        <div className="space-y-4">
          <Alerts variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="primary" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="success" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="warning" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="danger" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
        </div>
        <div className="space-y-4">
          <Alerts>
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="primary">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="success">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="warning">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="danger">
            alert! You should check in on some of those fields below.
          </Alerts>
        </div>
        <div className="space-y-4">
          <Alerts variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="primary" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="success" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="warning" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="danger" variant="soft">
            alert! You should check in on some of those fields below.
          </Alerts>
        </div>
        <div className="space-y-4">
          <Alerts>
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="primary">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="success">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="warning">
            alert! You should check in on some of those fields below.
          </Alerts>
          <Alerts color="danger">
            alert! You should check in on some of those fields below.
          </Alerts>
        </div>
      </div>
    </div>
  );
}

export default App;
