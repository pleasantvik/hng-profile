import React from "react";

export default function Product({ href, id, content, desc }) {
  console.log(content);
  return (
    <section className="links">
      <div className="link">
        <a href={href} className="link-item" id={id}>
          <p className="title">{content}</p>
        </a>
        {desc && <span className="subtext">{desc}</span>}
      </div>
    </section>
  );
}
