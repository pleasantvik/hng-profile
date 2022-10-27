import "./App.css";
import Profile from "./Profile";
import Product from "./Product";
const items = [
  {
    href: "https://training.zuri.team/",
    id: "btn_zuri",
    content: "Zuri Team",
    desc: "",
  },
  {
    href: "https://books.zuri.team/",
    id: "books",
    content: "Zuri books",
    desc: "Looking from books about coding and design?- Visit Zuri Books.",
  },
  {
    href: "https://books.zuri.team/python-for-beginners?ref_id=Ayomide-Ajala",
    id: "book_python",
    content: "Python Books",
  },
  {
    href: "https://background.zuri.team",
    id: "pitch",
    content: "Run a quick background check to know who you are working with.",
  },
  {
    href: "https://books.zuri.team/design-rules",
    id: "book_design",
    content: "Design Books",
  },
];
function App() {
  return (
    <div className="container">
      <Profile />
      {items.map(({ href, id, content, desc }) => {
        return <Product href={href} id={id} content={content} desc={desc} />;
      })}
    </div>
  );
}

export default App;
