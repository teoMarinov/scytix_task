import Image from "next/image";

export default function LaunchSuccessIcon({
  success,
}: {
  success: boolean;
}) {
  const imageAlt = success ? "Launch Failed" : "Launch Succeeded";
  const imagePath = success ? "/success-icon.svg" : "/error-icon.svg";

  return <Image height={25} width={25} src={imagePath} alt={imageAlt} />;
}
