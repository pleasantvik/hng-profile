import React from "react";

export default function Product({ href, id, book, desc }) {
  return (
    <section className="links">
      <div className="link">
        <a href={href} className="link-item" id={id}>
          <p className="title">{book}</p>
        </a>
        {desc && <span className="subtext">{desc}</span>}
      </div>
    </section>
  );
}
