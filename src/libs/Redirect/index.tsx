// libs
import { useEffect } from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
import { useRouter } from "next/dist/client/router";

export default function Redirect({ to }: { to: string }) {
  const router = useRouter();
  const { pathname, push } = router;

  useEffect(() => {
    push(to);
  }, [pathname, push, to]);
  return null;
}
