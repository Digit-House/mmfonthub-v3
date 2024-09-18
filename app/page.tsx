import FontCard from "@/components/FontCard";
import type { Font } from "@/types/font";
import { getFreeFonts } from "@/utils/getFonts";

export default function Home() {
  const fonts: Font[] = getFreeFonts();
  return (
    <div>
      <section>
        {fonts.map((font) => (
          <FontCard
            font={font}
            key={font.nameEn}
            fontSize={40}
            typeText="နေကောင်းလား"
          />
        ))}
      </section>
    </div>
  );
}
