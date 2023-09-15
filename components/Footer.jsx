import { Popover } from '@rewind-ui/core';
export default function Footer() {
  const rrss = [
    {
      name: 'GitHub',
      link: 'https://github.com/AlvaroMartinCrespo',
      img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADn-crespo-bb9aa5246/',
      img: 'https://static.vecteezy.com/system/resources/previews/023/986/926/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
    },
    {
      name: 'AlvaroDev',
      link: 'https://alvarodev.vercel.app/',
      img: 'https://cdn-icons-png.flaticon.com/512/1089/1089292.png',
    },
  ];
  return (
    <>
      <section className="bg-slate-300 py-[1rem] rounded-t">
        <div className="flex justify-center gap-[2rem] my-[1rem]">
          {rrss.map((rrss) => (
            <span key={rrss.name} className="w-10">
              <Popover>
                <Popover.Trigger>
                  <button>
                    <a href={rrss['link']} target="_blank" rel="noreferrer">
                      <img src={rrss['img']} alt={rrss['name']} />
                    </a>
                  </button>
                </Popover.Trigger>
                <Popover.Content>{rrss['name']}</Popover.Content>
              </Popover>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
