export default function TeamBackgroundSVG() {
    return (
      <svg
        viewBox="800 800 0 0"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1FC18D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0E552D" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        {/* Circles to match original design */}
        <circle cx="600" cy="200" r="250" fill="url(#grad1)" />
        <circle cx="700" cy="400" r="220" fill="url(#grad1)" />
        <circle cx="500" cy="500" r="190" fill="url(#grad1)" />
        <circle cx="400" cy="300" r="180" fill="url(#grad1)" />
      </svg>
    );
  }
  