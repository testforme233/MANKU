import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// 1. 配置图标尺寸
export const size = {
  width: 32,
  height: 32,
};

// 2. 配置输出格式
export const contentType = 'image/png';

// 3. 生成图标
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse 只能接受 JSX，所以我们把 MankuLogo 的 SVG 代码直接复制到这里
      // 注意：为了兼容性，去掉了 className，直接保留 SVG 核心逻辑
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="manku_gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>
          </defs>
          {/* 背景 */}
          <rect width="48" height="48" rx="12" fill="url(#manku_gradient)" />
          
          {/* M 形状 */}
          <path 
            d="M12 34V16L24 28L36 16V34" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* 装饰节点 */}
          <circle cx="12" cy="16" r="2.5" fill="white" />
          <circle cx="24" cy="28" r="2.5" fill="white" />
          <circle cx="36" cy="16" r="2.5" fill="white" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}