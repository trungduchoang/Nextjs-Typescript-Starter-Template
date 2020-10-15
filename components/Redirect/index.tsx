// libs
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Redirect() {
  const router = useRouter();
  const { pathname, push } = router;

  useEffect(() => {
    if (pathname === "/") push("/en");
  }, [pathname, push]);
  return null;
}
