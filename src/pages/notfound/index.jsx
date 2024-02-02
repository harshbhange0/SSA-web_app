import React from "react";
import png from "../../assets/pagenotfound.png";

function NotFoundPage() {
  return (
    <div>
      <img
        className="mx-auto h-[calc(100vh-66px)] w-[80%] object-contain"
        src={png}
        alt="404 Page not found"
      />
    </div>
  );
}

export default NotFoundPage;
