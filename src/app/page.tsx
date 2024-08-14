"use client"
import RadioGroup, { RadioOption } from "@/components/RadioGroup";
import Image from "next/image";

export default function Home() {
  const options: RadioOption[] = [
    { value: "1", children: "Suisse" },
    { value: "2", children: "Allemagne" },
    { value: "3", children: "Belgique" },
    { value: "4", children: <>
    <div>France</div>
      <Image 
        alt="Flag of France"
        width={100}
        height={50}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/langfr-2560px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png" 
        /></> },
        { value: "5", children: "Italie" },
        { value: "6", children: "Espagne" },
        { value: "7", children: "Portugal" },
        { value: "8", children: "Royaume-Uni" },
        { value: "9", children: "Pays-Bas" },
        { value: "10", children: "Suède" },
  ]
  return (
   <div>
      <h1>Welcome to Geo-Learner</h1>
      <form>
        <RadioGroup name="country" options={options} value="1" onChange={(value) => console.log(value)} />
      </form>
   </div>
  );
}
