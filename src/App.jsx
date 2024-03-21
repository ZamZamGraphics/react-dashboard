import Alerts from "./components/Alerts";

function App() {
  return (
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
    </div>
  );
}

export default App;
