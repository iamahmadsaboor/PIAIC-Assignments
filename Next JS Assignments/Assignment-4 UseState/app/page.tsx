import Image from "next/image";
import DataDisp from "./components/data";

export default function Home() {
  return (
    <main className="">
      <h2 className="text-2xl text-center px-32">
        Develop a Next js app and use states to show the name of a person from a
        list and on click of button it should print next or previous
        name from the list
      </h2>
      <DataDisp />
    </main>
  );
}
