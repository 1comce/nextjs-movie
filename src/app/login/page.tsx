import { Film } from "lucide-react";
import AuthForm from "@/components/auth/auth-form";
export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center bg-muted p-6 md:p-10'>
      <div className=' max-w-[800px] w-[calc(100vw-2rem)]'>
        <AuthForm />
      </div>
    </div>
  );
}
