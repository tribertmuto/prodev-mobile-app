/// <reference types="expo" />
/// <reference types="expo-router/types" />

// This file helps TypeScript understand image imports
declare module '*.png' {
  const content: any;
  export default content;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    className?: string;
  }
}

declare module 'react-native' {
  interface ViewProps {
    style?: any;
  }
  interface TextProps {
    style?: any;
  }
  interface TextInputProps {
    style?: any;
  }
  interface TouchableOpacityProps {
    style?: any;
  }
  interface ScrollViewProps {
    style?: any;
    contentContainerStyle?: any;
  }
}

declare module 'expo-router' {
  export function useRouter(): {
    back: () => void;
    push: (route: string) => void;
    replace: (route: string) => void;
  };
}
