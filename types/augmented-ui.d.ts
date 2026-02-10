import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    "data-augmented-ui"?: string;
    "data-augmented-ui-reset"?: boolean;
  }
}
