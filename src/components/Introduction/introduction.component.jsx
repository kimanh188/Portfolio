import "./introduction.style.css";

export function Introduction() {
  return (
    <>
      <div className="home-text">
        <p className="animation line1">
          <span className="red">function</span>{" "}
          <span className="purple">Welcome</span>{" "}
          <span className="orange">() {"{"}</span>
        </p>

        <p className="m-left-1 animation line2">
          <span className="red">return</span>
          <span className="orange"> {"("}</span>
        </p>

        <p className="m-left-2 animation line3">
          <span className="orange">{"<>"}</span>
        </p>

        <p className="m-left-3 animation line4">
          <span className="orange">{"<"}</span>
          <span className="green">h1</span>
          <span className="orange">{">"}</span>
          <span>Hello &amp; Welcome !</span>
          <span className="orange">{"</"}</span>
          <span className="green">h1</span>
          <span className="orange">{">"}</span>
        </p>

        <p className="m-left-3 animation line5">
          <span className="orange">{"<"}</span>
          <span className="green">h2</span>
          <span className="orange">{">"}</span>
          <span>I’m Kim, a web developer .</span>
          <span className="orange">{"</"}</span>
          <span className="green">h2</span>
          <span className="orange">{">"}</span>
        </p>

        <p className="m-left-3 animation line6">
          <span className="orange">{"<"}</span>
          <span className="green">p</span>
          <span className="orange">{">"}</span>
          <span>Learning to code, coding to learn.</span>
          <span className="orange">{"</"}</span>
          <span className="green">p</span>
          <span className="orange">{">"}</span>
        </p>

        <p className="m-left-2 animation line7">
          {" "}
          <span className="orange">{"</>"}</span>
        </p>

        <p className="m-left-1 animation line8">
          <span className="orange"> {");"}</span>
        </p>

        <p className="animation line9">
          <span className="orange">{"}"}</span>
        </p>
      </div>

      <div className="home-intro">
        <img
          className="home-code-snippet"
          src="code-snippet.png"
          alt="code-box"
        />
      </div>
    </>
  );
}
