import Alerts from "./components/Alerts";
import Headers from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="antialiased text-slate-700 dark:text-slate-400 bg-gray-100 dark:bg-slate-800">
      <Sidebar />
      <Headers />
      <div className="max-w-lg mx-auto mt-36 space-y-5">
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
