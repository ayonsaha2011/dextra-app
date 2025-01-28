// Define a specific interface
export interface LucideIcon {
  size?: number;
  className?: string;
  color?: string;
}

// Define IconProps with specific properties
export interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Define IconType as a generic object
export type IconType = Record<string, unknown>;

// Define IconComponent with React.FC
export type IconComponent = React.FC<{
  size?: number;
  className?: string;
  color?: string;
}>;
