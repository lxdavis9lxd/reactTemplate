import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("inline-flex rounded-md shadow-sm", className)}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: cn(
              child.props.className,
              "rounded-none",
              index === 0 && "rounded-l-md",
              index === React.Children.count(children) - 1 && "rounded-r-md",
              index !== 0 && "border-l-0"
            ),
          })
        }
        return child
      })}
    </div>
  )
})
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
