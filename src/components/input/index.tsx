import React, {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";

import { LucideProps, Info } from "lucide-react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<LucideProps>;
  loading?: boolean;
  name: string;
  style?: object;
  error?: string | boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, name, error, style, className, ...rest }, ref) => {
    const [inputError, setInputError] = useState(error);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const valueInput = event.target.value;
      if (valueInput) setInputError(""); // Remove o erro ao digitar
    };
    useEffect(() => {
      setInputError(error);
    }, [error]);

    return (
      <>
        <Container isErrored={!!inputError} style={style} className={className}>
          {Icon && <Icon size={20} className="icon" />}
          {/* {Icon && !loading ? (
          <Icon size={20} className="icon" />
        ) : (
          <CircularProgress
            size={16}
            className="icon icon_loading"
            sx={{ color: theme.colors.thema }}
          />
        )} */}

          <input {...rest} name={name} ref={ref} onChange={handleChange} />
        </Container>
        {inputError && (
          <div
            style={{
              fontSize: 12,
              color: "#c53030",
              display: "flex",
              alignItems: "center",
              paddingBottom: 8,
              marginTop: 4,
            }}
          >
            <Info size={13} color="#c53030" />
            <span style={{ marginLeft: 6 }}>{error}</span>
          </div>
        )}
      </>
    );
  }
);
