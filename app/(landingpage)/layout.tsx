import Navbar from "@/components/navbar";

interface Props {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children
}: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
