import Card from "./components/Card.tsx";
import Table from "./components/Table.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

type Card = {
  title: string;
  text: string;
  imageLink: string;
};

function App() {
  cards: Array<Card>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="special-color-yay">
          <h1 className="special-font-yay text-right p-16 self-center text-4xl text-white">HTL Dornbirn 5bWI</h1>
          <div className="flex justify-center">
            <div className="w-4/5">
              <Table />
            </div>
          </div>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
