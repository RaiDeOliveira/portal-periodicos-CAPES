import * as React from "react";
import { cn } from "@/lib/utils";
import SearchIcon from "@/assets/icons/search.svg"; // Caminho para o SVG

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const handleClick = () => {
      console.log("Ícone de busca clicado!");
    };

    return (
      <div className="relative flex items-center w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-background px-3 pr-10 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={handleClick}
          className="absolute right-3 h-5 w-5 flex items-center justify-center"
        >
          <img
            src={SearchIcon}
            alt="Search"
            className="h-full w-full text-muted-foreground"
          />
        </button>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
