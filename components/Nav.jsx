import { Link } from 'react-router-dom';
export default function Nav() {
  const sections = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
  ];

  return (
    <>
      <section className="bg-slate-300 p-[1rem] rounded">
        <nav>
          <ul className="flex justify-center gap-5">
            {sections.map((section) => (
              <li key={section.name}>
                <Link to={section.link}>{section.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
