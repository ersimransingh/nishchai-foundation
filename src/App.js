import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-dark text-light  p-3 text-center">
            <h2>Nishchai Foundation</h2>
            <p>Dummy subtitle</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4 text-center">
            <img
              src="https://picsum.photos/200"
              alt="logo"
              className="rounded-circle"
            />
          </div>
          <div className="col-md-4 mt-4">
            <h2 className="text-uppercase">About Us</h2>
          </div>
          <div className="col-md-8 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-4 mt-4">
            <h2 className="text-uppercase">Address</h2>
          </div>
          <div className="col-md-8 mt-4">
            <p>
              #301, times new roman
              <br />
              Dummy Address <br />
              California.
              <br />
              10008
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
