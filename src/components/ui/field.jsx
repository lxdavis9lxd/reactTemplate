import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Field = React.forwardRef(({ className, label, error, children, htmlFor, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  )
})
Field.displayName = "Field"

export { Field }
