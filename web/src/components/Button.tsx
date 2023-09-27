const styles = {
  color: '#f00',
};

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  const name = 'João Magnago';
  return <p style={styles}>{title}</p>;
}
