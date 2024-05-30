/* Input:

JSONtoHTML(json);

Output:
<div id="hello" class="foo">
  <h1>HELLO</h1>
  <p>
     <span class="bar">World</span>
  </p>
</div> */

function JSONtoHTML(json) {
  const fragment = document.createDocumentFragment();

  if (Array.isArray(json)) {
    for (let entry of json) {
      const element = document.createElement(entry.type);

      if (entry.props) {
        for (let key in entry.props) {
          element.setAttribute(key, entry.props[key]);
        }
      }

      if (Array.isArray(entry.children)) {
        for (let child of entry.children) {
          element.appendChild(JSONtoHTML(child));
        }
      } else {
        element.innerText = entry.children;
      }

      fragment.appendChild(element);
    }
  } else {
    return JSONtoHTML([json]);
  }

  return fragment;
}

const json = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};

console.log(JSONtoHTML(json));
