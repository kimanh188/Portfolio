import { NotFoundView } from "./view/notFound.view.jsx";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFoundContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NotFoundView />;
}
