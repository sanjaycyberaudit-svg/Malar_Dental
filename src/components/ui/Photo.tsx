import { useState } from "react";
import { cn } from "../../lib/utils";

interface PhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Image wrapper that fades in on load and degrades to a calm teal gradient
 * if the remote photo fails — so the layout never shows a broken icon.
 */
export function Photo({ src, alt, className, ...rest }: PhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/25 via-[hsl(var(--surface-dark))]/40 to-[hsl(var(--primary))]/10">
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
          {...rest}
        />
      )}
    </div>
  );
}
