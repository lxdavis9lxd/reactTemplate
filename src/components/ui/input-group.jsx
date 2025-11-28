import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex w-full items-center", className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: cn(
              child.props.className,
              "rounded-none",
              index === 0 && "rounded-l-md",
              index === React.Children.count(children) - 1 && "rounded-r-md"
            ),
          })
        }
        return child
      })}
    </div>
  )
})
InputGroup.displayName = "InputGroup"

const InputGroupText = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-10 items-center border border-input bg-muted px-3 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})
InputGroupText.displayName = "InputGroupText"

export { InputGroup, InputGroupText }
