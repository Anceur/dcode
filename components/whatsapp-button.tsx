"use client"

export default function WhatsAppButton() {
  const phoneNumber = "213559180536"
  const message = "Bonjour, je suis intéressé par vos services"

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.187 8.187 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23zm-4.52 4.7c-.15 0-.4.06-.61.29-.21.24-.8.78-.8 1.89 0 1.11.82 2.19.93 2.34.11.15 1.6 2.55 3.94 3.48 1.95.77 2.34.62 2.77.58.42-.04 1.36-.55 1.55-1.09.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.44-.26-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.11-.15.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.15-1.36-1.28-1.59-.13-.23-.01-.36.1-.47.11-.11.23-.27.35-.41.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.11-.52-1.26-.72-1.72-.19-.45-.38-.39-.52-.4-.13-.01-.29-.01-.44-.01z" />
      </svg>
    </a>
  )
}