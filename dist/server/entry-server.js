import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
const reactLogo = "/assets/react-CHdo91hT.svg";
const ProductDetails = () => {
  const shareUrl = "https://www.pakkamarwadi.tk/";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "#0000",
        height: "100vh",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ jsx("h1", { children: "I hope you like it" }),
        /* @__PURE__ */ jsx(
          FacebookShareButton,
          {
            url: shareUrl,
            quote: "Title or jo bhi aapko likhna ho",
            hashtag: "#portfolio...",
            children: /* @__PURE__ */ jsx(FacebookIcon, { size: 40, round: true })
          }
        ),
        /* @__PURE__ */ jsx(
          WhatsappShareButton,
          {
            url: shareUrl,
            quote: "Title or jo bhi aapko likhna ho",
            hashtag: "#portfolio...",
            children: /* @__PURE__ */ jsx(WhatsappIcon, { size: 40, round: true })
          }
        )
      ]
    }
  );
};
function App() {
  const [count, setCount] = useState(0);
  const shareUrl = "https://www.pakkamarwadi.tk/";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "I hope you like it" }),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Hello world" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Hello world" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Hello worldHello worldHello worldHello worldHello worldHello world" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://fastly.picsum.photos/id/531/1200/630.jpg?hmac=QXkvOlO4IS8lK8Rn5sPMxW5Cd24iDqTY6PNTAefsjmY" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: shareUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image:alt", content: "Hello world" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: "/vite.svg", className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://reactjs.org", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }),
    /* @__PURE__ */ jsx(ProductDetails, {})
  ] });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
