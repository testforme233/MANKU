import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Manku LLC 公司 Logo
 * 设计理念：字母 M 由三个节点连接而成，代表 Neural Networks（神经网络）的连接。
 */
export const MankuLogo: React.FC<IconProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="manku_gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" /> {/* Indigo-500 */}
          <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
        </linearGradient>
      </defs>
      {/* 背景圆角矩形 */}
      <rect width="48" height="48" rx="12" fill="url(#manku_gradient)" />
      
      {/* M 形状的路径 - 带有科技感的节点 */}
      <path 
        d="M12 34V16L24 28L36 16V34" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* 节点装饰 */}
      <circle cx="12" cy="16" r="2.5" fill="white" />
      <circle cx="24" cy="28" r="2.5" fill="white" />
      <circle cx="36" cy="16" r="2.5" fill="white" />
    </svg>
  );
};

/**
 * Palmistry AI App 图标
 * 设计理念：手掌轮廓 + 芯片电路纹路，象征传统手相与现代 AI 的结合。
 */
export const PalmistryIcon: React.FC<IconProps> = ({ className = "", size = 48 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="palm_bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e293b" /> {/* Slate-800 */}
          <stop offset="100%" stopColor="#0f172a" /> {/* Slate-900 */}
        </linearGradient>
        <linearGradient id="palm_lines" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" /> {/* Indigo-400 */}
          <stop offset="100%" stopColor="#c084fc" /> {/* Purple-400 */}
        </linearGradient>
      </defs>
      
      {/* App 图标外框 */}
      <rect width="64" height="64" rx="16" fill="url(#palm_bg)" stroke="#334155" strokeWidth="1" />
      
      {/* 手掌轮廓 */}
      <path 
        d="M32 56V48M32 48C32 48 22 46 20 36V24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24V30M32 48C32 48 42 46 44 36V22C44 19.7909 42.2091 18 40 18C37.7909 18 36 19.7909 36 22V28" 
        stroke="#475569" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* 核心 AI 线路 - 生命线/智慧线 变体为电路 */}
      <path 
        d="M32 32L32 20" 
        stroke="url(#palm_lines)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3" fill="#6366f1" className="animate-pulse" />
      <path 
        d="M32 32L24 40" 
        stroke="url(#palm_lines)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="24" cy="40" r="2" fill="#818cf8" />
      <path 
        d="M32 32L42 36" 
        stroke="url(#palm_lines)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle cx="42" cy="36" r="2" fill="#c084fc" />
      
      {/* 扫描线装饰 */}
      <rect x="16" y="12" width="32" height="1" fill="#6366f1" fillOpacity="0.5" />
    </svg>
  );
};