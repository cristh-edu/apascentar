import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Slider() {
  const imageUrl =
    "https://images.unsplash.com/photo-1487616892920-df7106ed3512";
  return (
    <Box
      styleSheet={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url("${imageUrl}")`,
        position: "absolute",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}
