import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const lister = () => setMatches(media.matches);

    window.addEventListener("resize", lister);

    return () => window.removeEventListener("resize", lister);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
