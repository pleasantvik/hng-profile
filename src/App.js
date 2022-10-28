import "./App.css";
import Profile from "./Profile";
import Product from "./Product";
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
    href: "https://books.zuri.team/design-rules",
    id: "book__design",
    book: "Design Books",
  },
];
const App = () => {
  return (
    <div className="container">
      <Profile />
      {ListItems.map(({ href, id, book, desc }) => {
        return <Product href={href} id={id} book={book} desc={desc} />;
      })}
    </div>
  );
};

export default App;
