import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  color?: string;
}

export function Button({
  children,
  loading,
  disabled,
  color,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type="button"
      {...rest}
      loading={loading}
      disabled={disabled}
      color={color}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {loading && (
          <CircularProgress
            size={16}
            sx={{
              color: theme.colors.shape,
              position: 'relative',
              right: 10
            }}
            thickness={5}
          />
        )} */}

        <div>{children}</div>
      </div>
    </Container>
  );
}
