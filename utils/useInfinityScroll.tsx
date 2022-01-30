import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hook";

const useInfinityScroll = (
  initialValue = {
    fetching: false,
    totalLoad: 10,
  }
) => {
  const [valueInfinityScroll, setValueInfinityScroll] = useState(initialValue);
  const movies = useAppSelector((state) => state.movies);

  const isBottom = (position) => {
    return position <= window.innerHeight;
  };

  const handleScroll = () => {
    const wrappedElement: any = document.getElementById("footer");
    const wrappedElementRect: DOMRect =
      wrappedElement?.getBoundingClientRect() ?? 10;
    if (isBottom(wrappedElementRect?.bottom ?? 10)) {
      if (valueInfinityScroll.totalLoad < movies.data.length - 10) {
        setValueInfinityScroll({
          fetching: true,
          totalLoad: valueInfinityScroll.totalLoad + 10,
        });
        document.removeEventListener("scroll", handleScroll);
        setValueInfinityScroll({
          fetching: false,
          totalLoad: valueInfinityScroll.totalLoad + 10,
        });
      } else {
        setValueInfinityScroll({
          fetching: true,
          totalLoad: movies.data.length,
        });
        document.removeEventListener("scroll", handleScroll);
        setValueInfinityScroll({
          fetching: false,
          totalLoad: movies.data.length,
        });
      }
    } else {
      document.addEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    if (valueInfinityScroll.totalLoad !== movies.data.length) {
      if (!valueInfinityScroll.fetching) {
        document.addEventListener("scroll", handleScroll);
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInfinityScroll.fetching]);

  return {
    valueInfinityScroll,
    setValueInfinityScroll,
    handleScroll,
  };
};

export default useInfinityScroll;
