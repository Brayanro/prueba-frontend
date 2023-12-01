interface LabelProps {
  text: string;
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="text-lg text-[#31A5E0] font-bold">{text}</label>;
};
