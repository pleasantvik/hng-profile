import "./App.css";
import Profile from "./Profile";
import Product from "./Product";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Form from "./Form";
const ListItems = [
  {
    href: "https://training.zuri.team/",
    id: "btn__zuri",
    book: "Zuri Team",
    desc: "",
  },
  {
    href: "https://books.zuri.team/",
    id: "books",
    book: "Zuri books",
    desc: "Get the best book about programming and design?- Visit Zuri Books.",
  },
  {
    href: "https://books.zuri.team/python-for-beginners?ref_id=pleasantvik",
    id: "book__python",
    book: "Python Books",
  },
  {
    href: "https://background.zuri.team",
    id: "pitch",
    book: "Want to know who your employee are? Run a quick background check at low cost.",
  },
  {
    href: "books.zuri.team/design-rules",
    id: "book__design",
    book: "Design Books",
  },
];
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Profile />

          {ListItems.map(({ href, id, book, desc }) => {
            return (
              <Product key={id} href={href} id={id} book={book} desc={desc} />
            );
          })}
          <Contact />
        </Route>
        <Route path="/contact">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
