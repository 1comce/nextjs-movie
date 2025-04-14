import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AuthForm from "@/components/auth/auth-form";
import { useState } from "react";
import exp from "constants";
export function DialogWrapper({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}
export function AuthDialog({ onSuccess }: { onSuccess: () => void }) {
  return (
    <DialogContent className='rounded-md max-w-[800px] w-[calc(100vw-2rem)]'>
      <DialogHeader className='hidden'>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>Input email and password to login</DialogDescription>
      </DialogHeader>
      <AuthForm onSuccess={onSuccess} />
      <DialogFooter className='hidden'>
        <Button type='submit'>close</Button>
      </DialogFooter>
    </DialogContent>
  );
}
export function DialogTriggerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}
export default function FullAuthDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTriggerWrapper>{children}</DialogTriggerWrapper>
      <AuthDialog onSuccess={() => setOpen(false)} />
    </Dialog>
  );
}
