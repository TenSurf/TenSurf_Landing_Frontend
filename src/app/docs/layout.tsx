import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import DocsLayout from "@/components/docs/DocsLayout";
import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DefaultLayout>
      <DocsLayout>{children}</DocsLayout>
    </DefaultLayout>
  );
}
