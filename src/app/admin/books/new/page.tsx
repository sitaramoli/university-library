import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookForm from "@/app/admin/form/BookForm";

const Page = () => {
  return (
    <>
      <Button
        asChild={true}
        className="mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-dark-200 hover:bg-light-300"
      >
        <Link href="/admin/books">Go Back</Link>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};
export default Page;
