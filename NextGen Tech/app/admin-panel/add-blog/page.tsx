import Spinner from "@/app/components/Spinner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AddBlogForm = dynamic(
  () => import("../../components/Adminpanel/AddBlogForm"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <AddBlogForm />
    </Suspense>
  );
}
