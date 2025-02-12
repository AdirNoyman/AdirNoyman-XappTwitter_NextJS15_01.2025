'use client';
import { IKImage } from 'imagekitio-next';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageProps = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  transform?:boolean;
};

export default function Image({ path, w, h, alt, className, transform }: ImageProps) {
  return (
    <div className="">
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}        
        {...(transform ? {transformation:[{ width: `${w}`, height: `${h}` }]} : {width:w, height:h})}
        alt={alt}
        className={className}
      />
    </div>
  );
}
