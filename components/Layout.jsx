import Main from '../components/Main';
import { useState } from 'react';
import { Modal } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';
import Formulario from '../components/Formulario';
import Message from './Message';
import { useEffect } from 'react';
function App() {
  const [open, setOpen] = useState(false);
  //   Active the modal
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Main>
        <section className="p-10">
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
          <section className="flex flex-col gap-5">
            {/* For con todos los mensajes que vengan desde la base de datos */}
            <Message
              title="Anonimo"
              message="Mi tio abuelo de 83 años me violo y se corrio en la cocina y ahora esta todo lleno de semen y no podemos hacer nada, esta mi tia llorando porque esta todo lleno de semen y mi padre esta cagando por todo la habitación de mi nieto."
              color={true}
            />
            <Message
              title="Anonimo"
              message="Mi tio abuelo de 83 años me violo y se corrio en la cocina y ahora esta todo lleno de semen y no podemos hacer nada, esta mi tia llorando porque esta todo lleno de semen y mi padre esta cagando por todo la habitación de mi nieto."
              color={false}
            />
            <Message
              title="Anonimo"
              message="Mi tio abuelo de 83 años me violo y se corrio en la cocina y ahora esta todo lleno de semen y no podemos hacer nada, esta mi tia llorando porque esta todo lleno de semen y mi padre esta cagando por todo la habitación de mi nieto."
              color={false}
            />
            <Message
              title="Anonimo"
              message="Mi tio abuelo de 83 años me violo y se corrio en la cocina y ahora esta todo lleno de semen y no podemos hacer nada, esta mi tia llorando porque esta todo lleno de semen y mi padre esta cagando por todo la habitación de mi nieto."
              color={false}
            />
          </section>
        </section>
      </Main>
    </>
  );
}

export default App;
