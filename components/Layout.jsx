import Main from '../components/Main';
import { useState } from 'react';
import { Modal } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';
import Formulario from '../components/Formulario';
import Message from './Message';
import { useEffect } from 'react';
import { supabase } from '../src/supabase/client';
function App() {
  const [open, setOpen] = useState(false);
  const [secret, setSecret] = useState();
  const [loading, setLoading] = useState(false);
  // Obtenemos de la base de datos los secretos que haya
  // TO DO --> Hay que paginar los mensages que llegen
  useEffect(() => {
    const getSecrets = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('secrets').select('*');
      if (error) {
        console.error(error);
      }
      setSecret(data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    getSecrets();
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
            <div className="flex justify-center">
              <Formulario />
            </div>
          </section>
          <hr className="my-[1rem] border-2 border-gray" />
          <section className="flex flex-col gap-5 items-center">
            {loading ? (
              <h2>Loading ...</h2>
            ) : secret ? (
              <>
                {secret.map((secret) => {
                  return (
                    <Message key={secret.id} title="Anonimo" message={secret.secret} color={Math.random() < 0.5} />
                  );
                })}
              </>
            ) : (
              <>
                <h2>No hay secretos</h2>
              </>
            )}
            {/* <Message
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
            /> */}
          </section>
        </section>
      </Main>
    </>
  );
}

export default App;
