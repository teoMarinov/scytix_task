import Image from "next/image";
import LaunchSuccessIconProps from "./type";

export default function LaunchSuccessIcon({ success }: LaunchSuccessIconProps) {
  const imageAlt = success ? "Launch Failed" : "Launch Succeeded";
  const imagePath = success ? "/success-icon.svg" : "/error-icon.svg";

  return <Image height={25} width={25} src={imagePath} alt={imageAlt} />;
}
