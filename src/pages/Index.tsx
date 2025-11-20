import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const wishes = [
  "Chúc các boy GDG-HUST luôn mạnh mẽ, tự tin và thành công trên mọi con đường! 💪",
  "Ngày Boys Day vui vẻ! Chúc các anh luôn giữ được nụ cười rạng rỡ và tinh thần tươi trẻ! 🌟",
  "Gửi đến những chàng trai GDG-HUST thân yêu: Luôn vững vàng, luôn tỏa sáng! ✨",
  "Chúc các boy coding giỏi, debug nhanh, và luôn có nhiều commit xanh trên Github! 💻",
  "Boys Day thật ý nghĩa! Chúc các anh luôn khỏe mạnh, hạnh phúc và đạt được mọi ước mơ! 🎯",
  "Gửi tặng các boy GDG-HUST: Chúc các anh luôn là phiên bản tốt nhất của chính mình! 🚀",
  "Chúc mừng Boys Day! Hy vọng các anh luôn có nhiều năng lượng tích cực và động lực học tập! 📚",
  "Đến những chàng trai GDG: Các anh tuyệt vời lắm! Cứ tiếp tục tỏa sáng nhé! 🌈",
  "Boys Day ý nghĩa! Chúc các anh code không bug, project pass deadline và coffee không bao giờ hết! ☕",
  "Chúc các boy GDG-HUST luôn vui vẻ, yêu đời và chinh phục mọi thử thách trong cuộc sống! 🎉",
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWish, setCurrentWish] = useState("");

  const openEnvelope = () => {
    if (!isOpen) {
      // Get random wish
      const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
      setCurrentWish(randomWish);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-pink overflow-hidden relative">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-envelope-pink animate-pulse-soft" size={40} />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
              HAPPY BOYS DAY
            </h1>
            <Sparkles className="text-envelope-pink-light animate-pulse-soft" size={40} />
          </div>
          <p className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            GDG-HUST
          </p>
        </div>

        {/* Instruction text above envelope */}
        {!isOpen && (
          <div className="mb-6 animate-pulse-soft">
            <p className="text-2xl font-bold text-envelope-pink flex items-center gap-2 justify-center">
              <Sparkles size={24} />
              Nhấn để mở lá thư 💌
              <Sparkles size={24} />
            </p>
          </div>
        )}

        {/* Single envelope card */}
        <div className="w-full max-w-md mx-auto">
          <Card
            className={`relative bg-white border-0 overflow-hidden cursor-pointer transition-all duration-700 animate-glow-pulse ${
              isOpen ? "scale-105" : "scale-100"
            }`}
            onClick={openEnvelope}
            style={{ minHeight: "400px" }}
          >
            {/* Shimmer overlay effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              }}
            />

            {/* Envelope flap with pink color */}
            <div
              className={`absolute inset-0 bg-envelope-pink transition-transform duration-700 origin-top ${
                isOpen ? "-translate-y-full" : "translate-y-0"
              }`}
              style={{
                clipPath: "polygon(0 0, 50% 40%, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10">
                <Heart
                  className="text-white drop-shadow-lg animate-wiggle"
                  size={60}
                  fill="white"
                />
              </div>
              
              {/* Decorative sparkles on flap */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute text-white/40"
                    size={16}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 60}%`,
                      animation: `pulse-soft ${2 + Math.random()}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card content */}
            <div className="relative p-8 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-white to-pink-50">
              {!isOpen ? (
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-envelope-pink to-envelope-pink-light rounded-full animate-pulse-soft mx-auto flex items-center justify-center">
                      <Heart size={60} className="text-white" fill="white" />
                    </div>
                    {/* Sparkle decorations around the heart */}
                    <Sparkles className="absolute -top-2 -right-2 text-envelope-pink animate-pulse-soft" size={28} />
                    <Sparkles className="absolute -bottom-2 -left-2 text-envelope-pink-light animate-pulse-soft" size={28} style={{ animationDelay: "0.3s" }} />
                    <Sparkles className="absolute top-1/2 -left-4 text-envelope-pink animate-pulse-soft" size={24} style={{ animationDelay: "0.6s" }} />
                    <Sparkles className="absolute top-1/2 -right-4 text-envelope-pink-light animate-pulse-soft" size={24} style={{ animationDelay: "0.9s" }} />
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6 animate-slide-up">
                  <div className="flex justify-center gap-2 mb-4">
                    <Sparkles className="text-envelope-pink" size={24} />
                    <Sparkles className="text-envelope-pink-light" size={28} />
                    <Sparkles className="text-envelope-pink" size={24} />
                  </div>
                  <p className="text-lg leading-relaxed text-foreground font-medium px-4">
                    {currentWish}
                  </p>
                  <div className="pt-6 flex justify-center gap-3">
                    <Heart size={32} className="text-envelope-pink animate-pulse-soft" fill="currentColor" />
                    <Heart size={32} className="text-envelope-pink-light animate-pulse-soft" fill="currentColor" style={{ animationDelay: "0.3s" }} />
                    <Heart size={32} className="text-envelope-pink animate-pulse-soft" fill="currentColor" style={{ animationDelay: "0.6s" }} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 italic">
                    Nhấn lại để đọc lời chúc khác 🎉
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-slide-up">
          <p className="text-sm text-muted-foreground font-medium">
            Made with 💖 for GDG-HUST Boys
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
