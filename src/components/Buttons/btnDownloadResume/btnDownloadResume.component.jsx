import "./btnDownloadResume.style.css";

export function BtnDownloadResume() {
  return (
    <button className="resume-btn" title="Click to open in new tab">
      View my resume{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="resume-btn-icon"
          fill="#000000"
          d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
        />
      </svg>
    </button>
  );
}
