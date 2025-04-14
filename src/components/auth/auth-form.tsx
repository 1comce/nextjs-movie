"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LoginForm, RegisterForm, ForgotForm } from "./forms";
import { useState } from "react";
export default function AuthForm({
  type = "login",
  className = "",
  onSuccess,
  ...props
}: {
  type?: string;
  className?: string;
  onSuccess?: () => void;
}) {
  const [formType, setFormType] = useState(type);
  const handleForm = (type: string) => {
    switch (type) {
      case "login":
        return <LoginForm setFormType={setFormType} onSuccess={onSuccess} />;
      case "register":
        return <RegisterForm setFormType={setFormType} onSuccess={onSuccess} />;
      case "forgot":
        return <ForgotForm setFormType={setFormType} onSuccess={onSuccess} />;
      default:
        return null;
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className='overflow-hidden'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <div className='relative hidden bg-muted md:block'>
            <img
              src='/images/placeholder.svg'
              alt='Image'
              className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
          </div>
          {handleForm(formType)}
        </CardContent>
      </Card>
    </div>
  );
}
