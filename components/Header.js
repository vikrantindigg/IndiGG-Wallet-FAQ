import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
          <a>{`IndiGG is India's biggest gaming guild with a mission to onboard 500m+ gamers from Indian subcontinent. We provide you with an opportunity to earn an income while playing video games daily, completely free of cost.`}</a>
      </p>
    </header>
  );
}
