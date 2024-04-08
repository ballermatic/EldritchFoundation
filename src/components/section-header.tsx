type SectionHeaderProps = { title: string };

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <p className='mt-8 border-b-2 border-smoke pb-2 font-bold'>{title}</p>;
}