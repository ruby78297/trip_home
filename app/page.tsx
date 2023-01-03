/** @format */

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-5xl">Home page</h1>
        <Button
          variant={"outline"}
          size={"lg"}
          className="capitalized m-8"
        >
          click me
        </Button>
      </div>
    </>
  );
}
