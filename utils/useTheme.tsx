import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLang } from "../redux/themeSlice";

const useTheme = (
  initialValue = {
    lang: "en",
  },
  localKey = "theme"
) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(initialValue);

  useEffect(
    () => {
      window.localStorage.setItem(localKey, JSON.stringify(theme))
    }
  );

  const changeLanguage = useCallback(() => {
    if(theme.lang === 'en') {
      setTheme({ lang: 'id'});
      dispatch(setDataLang('id'))
    } else {
      setTheme({ lang: 'en'});
      dispatch(setDataLang('en'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[theme])

  return {
    theme,
    setTheme,
    changeLanguage
  };
};

export default useTheme;
