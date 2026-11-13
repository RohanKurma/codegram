import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

export function CodegramMark({ size = 76 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 76 76">
      <Defs><LinearGradient id="brand" x1="0" y1="0" x2="1" y2="1"><Stop offset="0" stopColor="#139cff" /><Stop offset="1" stopColor="#0064e9" /></LinearGradient></Defs>
      <Path d="M56 21a24 24 0 1 0 0 34" stroke="url(#brand)" strokeWidth={11} fill="none" />
    </Svg>
  );
}

export function GoogleMark() {
  return (
    <Svg width={27} height={27} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.89 46.98 24.55Z" />
      <Path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.77 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.86 23.86 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
    </Svg>
  );
}

export function AppleMark() {
  return (
    <Svg width={26} height={29} viewBox="0 0 24 28">
      <Path fill="#fff" d="M17.1 4.4c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.9.9-3.8 2-.8.9-1.6 2.4-1.4 3.9 1.5.1 3-.7 3.9-1.8ZM21.7 20.6c-.6 1.4-.9 2-1.7 3.2-1 1.5-2.4 3.4-4.1 3.4-1.5 0-1.9-1-4-1s-2.5 1-4 1c-1.7 0-3-1.7-4-3.2C1 19.8.5 14.3 2.3 11.4c1.3-2 3.3-3.2 5.2-3.2 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.4.9 4.6 2.4-4.1 2.3-3.4 8.1.8 10Z" />
    </Svg>
  );
}
