// libs
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Redirect({ to }: { to: string }) {
  const router = useRouter();
  const { pathname, push } = router;

  useEffect(() => {
    push(to);
  }, [pathname, push, to]);
  return null;
}
