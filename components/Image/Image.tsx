// eslint-disable-next-line no-restricted-imports
import NextImage from "next/image";
import cn from "classnames";

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  onLoad?: () => void;
  withFallBackImage?: boolean;
};

// TODO: Use base path
export default function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  onLoad,
  withFallBackImage = true,
}: ImageProps) {
  return (
    <NextImage
      className={className}
      src={
        src?.startsWith("http") || src?.startsWith("blob") ? src : `/app${src}`
      }
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      fill={fill}
      onError={(e) => {
        if (withFallBackImage) {
          e.currentTarget.src = "/app/images/image-placeholder.jpg";
        }
      }}
      onLoad={onLoad}
    />
  );
}
