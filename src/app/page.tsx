import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-[100vh] flex-col items-center justify-center gap-4">
      {/* <div className="flex justify-between max-w-5xl w-full items-center">
        <Link href="#" className="text-4xl font-bold text-gradient">
          shadcn-chat
        </Link>
      </div> */}

      {/* 1a1e21 */}
      {/* 04e475 */}
      {/* !bg-[#1a1e21] */}
      <div className=" border z-10  max-w-full w-full h-full text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
    </main>
  );
}
