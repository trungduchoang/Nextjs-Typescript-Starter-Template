// libs
import { useEffect } from "react";
import { useRouter } from "next/router";

type PROPS = {
  /** address to redirect */
  to: string;
};
/**
 * Redirect
 */
export const Redirect = ({ to }: PROPS) => {
  const router = useRouter();
  const { pathname, push } = router;

  useEffect(() => {
    push(to);
  }, [pathname, push, to]);

  return null;
};
