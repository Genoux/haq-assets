import * as React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
  fill?: string;
}

const Logo: React.FC<LogoProps> = ({ size = '100', fill = 'currentColor', ...props }) => (
  <svg width={size}
    height={size}
    viewBox="0 0 512 512"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M151.726 343.855C151.726 343.855 154.291 277.1 222.245 230.599C290.199 184.08 332.12 192.847 332.12 192.847C332.12 192.847 229.772 228.889 212.402 352.849C197.641 458.193 253.293 513 253.293 513C253.293 513 240.612 385.798 312.442 332.107C382.429 279.795 414.125 343.864 414.125 343.864C414.125 343.864 457.044 302.174 444.804 241.394C432.555 180.615 369.852 187.463 369.852 187.463L276.154 0C276.154 0 236.482 200.541 163.203 214.411C123.394 221.941 110.719 176.659 110.719 176.659C110.719 176.659 53.3411 220.893 67.1432 281C80.7144 340.152 151.717 343.855 151.717 343.855H151.726Z" fill={fill} />
  </svg>
);

export default Logo;
