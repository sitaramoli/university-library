"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  bookId: string;
  userId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  bookId,
  userId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrow = async () => {
    if (!isEligible) {
      toast.error(message);
      return;
    }
    setBorrowing(true);
    try {
      const result = await borrowBook({ bookId, userId });
      if (result.success) {
        toast.success("Book borrowed successfully.");
        router.push("/my-profile");
      } else {
        toast.error("Error occurred while borrowing the book.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while borrowing the book.");
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button
      className="book-overview_btn"
      disabled={!isEligible || borrowing}
      onClick={handleBorrow}
    >
      {borrowing ? (
        <Loader className="animate-spin" width={20} height={20} />
      ) : (
        <Image src={"/icons/book.svg"} alt={"book"} width={20} height={20} />
      )}
      <p className="font-bebas-neue text-xl text-dark-100">Borrow Book</p>
    </Button>
  );
};
export default BorrowBook;
