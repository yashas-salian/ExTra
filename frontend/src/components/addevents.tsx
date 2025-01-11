// in work 

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle
  } from "@/components/ui/dialog"

export const Addevents=()=>{
    return <div>
        <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Do you want to add some events to track?</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
}