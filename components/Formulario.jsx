import { Textarea } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';
import { supabase } from '../src/supabase/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formulario() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Obtenemos el valor del text area del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const secret = data.secret;
    // Insertar en la base de datos
    try {
      if (!secret) throw new Error('No has escrito nada');
      await supabase.from('secrets').insert({ secret });
      e.target.reset();
      toast.success('Mensaje enviado', {
        position: 'top-right',
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
      window.location.reload(false);
    } catch (error) {
      console.error(error);
      toast.error('Error', {
        position: 'top-right',
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center p-[1rem] gap-[1rem]">
        <form onSubmit={handleSubmit}>
          <Textarea name="secret" withRing={false} />
          <Button type="submit" withRing={false}>
            Enviar
          </Button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
