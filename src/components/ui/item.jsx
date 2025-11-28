import * as React from "react"
import { cn } from "@/lib/utils"

const Item = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 rounded-md p-3 hover:bg-accent transition-colors",
        className
      )}
      {...props}
    />
  )
})
Item.displayName = "Item"

export { Item }
