import Main from '../components/Main';
import { useState } from 'react';
import { Modal } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';
import Formulario from '../components/Formulario';
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Main>
        <section className="h-screen p-10">
          <Modal size="md" open={open} onClose={() => setOpen(false)}>
            <div className="flex justify-center flex-col p-[2rem]">
              <h2 className="text-2xl">
                Bienvenido a <span className="text-red-500">Tell Your Secret</span>
              </h2>
              <p>Aqui puedes contar tu secreto sin que nadie sepa que es tuyo</p>
            </div>
          </Modal>
          <section className="flex justify-center flex-col">
            <div className="flex justify-center">
              <Button withRing={false} className="w-[15rem]" onClick={() => setOpen(true)} tone="light" color="blue">
                TellYourSecret
              </Button>
            </div>
            <Formulario />
          </section>
          <hr className="my-[1rem] border-2 border-gray" />
        </section>
      </Main>
    </>
  );
}

export default App;
